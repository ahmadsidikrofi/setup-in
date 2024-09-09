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

const FormUpdatePeripheral = ({ storeId, slugStore, dataPeripheral }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState()
    const [urlGambar, setUrlGambar] = useState(dataPeripheral.image)

    const schema = yup.object().shape({
        nama_peripheral: yup.string()
        .trim()
        .min(25, "Nama peripheral tidak boleh kurang dari 25 huruf dan beri nama toko didepan nama peripheral. Contoh: FURNI - ")
    })
    const form = useForm({
        resolver: yupResolver(schema),
    })
    useEffect(() => {
        form.setValue('image', urlGambar)
    },[form, urlGambar])

    const handleUpdatePeripheral = async (data) => {
        const slug = slugify(data.nama_peripheral, { lower: true, replacement: '-', strict: true })
        await axios.put(`/api/v1/peripherals/${dataPeripheral.slug}`, { ...data, slug, store_id: storeId })
        .then(async () => {
            setIsLoading(true)
            toast.loading("Tunggu...", { duration: 1000 })
            await new Promise(resolve => setTimeout(resolve, 1000))
            toast.success("Peripheral berhasil di update", { duration: 2000 })
            await new Promise(resolve => setTimeout(resolve, 2000))
            setIsLoading(false)
            router.push(`/dashboard/stores/${slugStore}`)
            router.refresh()
        }).catch (() => {
            toast.error("peripheral fail on update 😅")
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
                    defaultValue={dataPeripheral.nama_peripheral}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama peripheral</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deskripsi"
                    defaultValue={dataPeripheral.deskripsi}
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Deskripsi</FormLabel>
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
                    defaultValue={dataPeripheral.categories}
                    render={({ field }) => (
                        <FormItem className="mb-5 w-full">
                            <FormLabel>Kategori</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value} className="w-full">
                                    <SelectTrigger className="text-left">
                                        <SelectValue placeholder="Pilih kategori" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Keyboard">Keyboard</SelectItem>
                                        <SelectItem value="Mouse">Mouse</SelectItem>
                                        <SelectItem value="Deskmate">Kamar mandi</SelectItem>
                                        <SelectItem value="Deskself">Deskself</SelectItem>
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
                        defaultValue={dataPeripheral.harga}
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
                        defaultValue={urlGambar}
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

                <Button onClick={form.handleSubmit(handleUpdatePeripheral)} type="submit" disabled={isLoading ? true : false} className="rounded-full w-full p-3 text-color-primary bg-color-accent2">
                    {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null} Update peripheral 
                </Button>
            </Form>
        </div>
    </>
    )
}
export default FormUpdatePeripheral