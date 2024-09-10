'use client'
import { ShoppingCart } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast';
import FurnitureSkeleton from "./skeleton/FurnitureSkeleton"

const PeripheralsCard = ({ peripherals, authUser }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [localCart, setLocalCart] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
        const storedCart = JSON.parse(localStorage.getItem('local-cart')) || []
        setLocalCart(storedCart)
    }, [])

    const addToCart = async (peripherals, e) => {
        e.preventDefault()
        const isLocalPeripheralsExists = localCart.some((item) => item.slug === peripherals.slug)
        if (!authUser) {
            if (isLocalPeripheralsExists) {
                toast.success("peripherals sudah tersedia dalam keranjang")
                return
            }
        }
        const data = {
            peripheral_id: peripherals.id,
            nama_peripheral: peripherals.nama_peripheral,
            harga: peripherals.harga,
            categories: peripherals.categories,
            image: peripherals.image,
            id_peripherals: peripherals.id,
            slug: peripherals.slug,
            user_email: authUser?.email,
        }
        
        if (authUser) {
            try {
                // Jika user login, tambahkan ke database
                const res = await axios.post('/api/v1/cart', data)
                if (res.data.status === 200) {
                    toast.loading("Tunggu...", { duration: 1000 })
                    setTimeout(() => {
                        toast.success("Peripheral berhasil masuk keranjang")
                        router.refresh()
                    }, 1000)
                } else {
                    toast.success("Peripheral sudah tersedia dalam keranjang")
                    console.error("Gagal menambahkan Peripheral ke keranjang")
                }
            } catch (error) {
                console.error("Gagal menambahkan furnitur ke keranjang", error);
                toast.success("Peripheral sudah tersedia dalam keranjang");
            }
        } else {
            // Jika user tidak login, hanya tampilkan pesan sukses
            toast.success("Peripheral berhasil masuk keranjang")
            const updatedLocalCart = [...localCart, data]
            setLocalCart(updatedLocalCart)
            localStorage.setItem('local-cart', JSON.stringify(updatedLocalCart))
            window.dispatchEvent(new Event('local-cart-updated'))
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-12">
            <Toaster />
            {peripherals?.map((peripheral) => (
                <div key={peripheral.id}>
                {isLoading ? <FurnitureSkeleton setIsLoading={setIsLoading}/> :
                    // /furnitures/edit/${furniture.slug}
                    <div>
                        <Link href={`/on-your-desk/${peripheral.slug}`}>
                            <div className="p-2 border-color-accent border-[1px] text-color-secondary rounded-[23px] shadow-xl hover:shadow-2xl transition-all ease-linear">
                                <Image src={peripheral.image || ''} width={768} height={768} alt="..." className="w-full object-cover xl:h-64 md:h-64 h-96 rounded-[20px] hover:transition-all hover:scale-[1.08]" />
                                <div className="p-2">
                                    <p className="font-normal text-sm py-2">{peripheral.categories}</p>
                                    <p className="font-semibold text-lg mb-5">
                                        {peripheral.nama_peripheral.length > 19 ? 
                                            peripheral.nama_peripheral.substring(0, 40) + "..." 
                                            : peripheral.nama_peripheral
                                        }
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-lg text-color-accent2">Rp {peripheral.harga.toLocaleString("id-ID", {minimumFractionDigits: 2})}</p>
                                        <button onClick={(e) => addToCart(peripheral, e)} >
                                            <ShoppingCart size={36} className="cart-now p-2 border-[1px] bg-amber-100 border-color-accent text-color-accent2 rounded-full hover:scale-[1.15] transition-all ease-linear hover:shadow-lg hover:bg-color-accent2 hover:text-color-primary" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                }
                </div>
            ))}
        </div>
    )
}
export default PeripheralsCard