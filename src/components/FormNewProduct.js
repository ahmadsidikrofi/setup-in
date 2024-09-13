'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button"
import toast, { Toaster } from 'react-hot-toast'
import axios from "axios"
import { ReloadIcon } from "@radix-ui/react-icons"
import Dropzone from "./Dropzone"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import slugify from "slugify"

const FormNewProduct = ({ storeId, slugStore }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [urlGambar, setUrlGambar] = useState('')

    const schema = yup.object().shape({
        nama_peripheral: yup.string()
        .trim()
        .min(25, "Nama peripheral tidak boleh kurang dari 25 huruf dan beri nama toko didepan nama peripheral. Contoh: CORSAIR - ")
    })
    const form = useForm({
        resolver: yupResolver(schema),
    })
    useEffect(() => {
        form.setValue('image', urlGambar)
    },[form, urlGambar])

    const createPeripheral = async (data) => {
        const slug = slugify(data.nama_peripheral, { lower: true, replacement: '-', strict: true })
        await axios.post('/api/v1/peripherals', { ...data, slug, store_id: storeId })
        .then(async () => {
            setIsLoading(true);
            toast.loading("Tunggu...", { duration: 1000 });
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Peripheral berhasil dibuat", { duration: 2000 });
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false);
            router.push(`/dashboard/stores/${slugStore}`)
            router.refresh();
        }).catch (() => {
            toast.error("Peripheral gagal ditambahkan 😅")
        })
    }
    
    return (
        <>
        <div>
            <Toaster />
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="nama_peripheral"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama peripheral</FormLabel>
                            <FormControl>
                                <Input placeholder="Input your peripheral name here" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deskripsi"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Describe your good stuff" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col sm:flex-row items-center sm:gap-5">
                    <FormField
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                            <FormItem className="mb-5 w-full">
                                <FormLabel>Kategori</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value} className="w-full">
                                        <SelectTrigger className="text-left">
                                            <SelectValue placeholder="Pilih kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="keyboard">Keyboard</SelectItem>
                                            <SelectItem value="mouse">Mouse</SelectItem>
                                            <SelectItem value="deskmate">Deskmate</SelectItem>
                                            <SelectItem value="deskshelf">Deskself</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="harga"
                        render={({ field }) => (
                            <FormItem className="mb-5 w-full">
                                <FormLabel>Harga</FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center'>
                                            Rp
                                        </p>
                                        <Input
                                            type='number' className='pl-8' placeholder='0' disabled={isLoading}
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div>
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem className="mb-5">
                                <FormLabel>Foto peripheral</FormLabel>
                                <FormControl>
                                    <>
                                        <Input type='hidden' className='pl-8' {...field} />
                                        <Dropzone urlGambar={urlGambar} setUrlGambar={setUrlGambar}/>
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button onClick={form.handleSubmit(createPeripheral)} type="submit" disabled={isLoading ? true : false} className="rounded-full w-full p-3 text-color-primary bg-color-accent2">
                    {isLoading === true ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null} Add This Peripheral 
                </Button>
            </Form>
        </div>
    </>
    )
}
export default FormNewProduct