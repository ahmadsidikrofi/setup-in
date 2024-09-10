'use client'

import { ShoppingCart } from "@phosphor-icons/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const AddCartFunction = ( {nama_peripheral, harga, categories, image, id_peripherals, slug, authUser} ) => {
    const router = useRouter()
    const [localCart, setLocalCart] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("local-cart")) || []
        setLocalCart(storedCart)
    }, [])

    const handleAddCart = async () => {
        const isLocalPeripheralExist = localCart.some((item) => item.slug === slug)
        if (!authUser) {
            if (isLocalPeripheralExist) {
                toast.success("Peripheral sudah berada dalam keranjang")
                return
            }
        }
        const data = { nama_peripheral, harga, categories, image, id_peripherals, slug, user_email:authUser?.email }
        if (authUser) {    
            await axios.post("/api/v1/cart", data)
            .then((res) => {
                if (res.data.status === 200) {
                    toast.loading("Tunggu...", { duration: 1000 })
                    setTimeout(() => {
                        toast.success("Peripheral berhasil masuk keranjang")
                        router.refresh()
                    }, 1000)
                } else if (res.data.status === 500) {
                    toast.error("Peripheral menolak masuk ke keranjang")
                } else {
                    toast.success("Peripheral sudah tersedia dalam keranjang")
                    console.error("Gagal menambahkan Peripheral ke keranjang")
                }
            }).catch(() => {
                toast.error("Sepertinya jangan beli barang ini dulu ya🙏")
            })
        } else {
            toast.success("Peripheral berhasil masuk keranjang")
            const isLocalCartSorted = [...localCart, data ]
            setLocalCart(isLocalCartSorted)
            localStorage.setItem("local-cart", JSON.stringify(isLocalCartSorted))
            window.dispatchEvent(new Event('local-cart-updated'))
        }
    }

    return (
        <main className="mt-5">
            <Toaster />
            <button onClick={handleAddCart} className="flex bg-color-accent2 rounded-full shadow py-1 px-2 items-center  hover:scale-[1.08] transition-all ease-linear hover:shadow-lg">
                <p className="font-medium text-color-primary text-md px-1">Add to Cart</p>
                <ShoppingCart size={36} className="text-color-primary px-1" />
            </button>
        </main>
    )
}
export default AddCartFunction