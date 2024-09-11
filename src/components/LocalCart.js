'use client'

import Image from "next/image"
import Link from "next/link"
import { Separator } from "./ui/separator"
import DeleteCartButton from "./DeleteCartButton"
import toast from 'react-hot-toast';
import { useEffect, useState } from "react"

const LocalCart = () => {
    const [localCart, setLocalCart] = useState([])
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("local-cart")) || [];
        setLocalCart(cartItems);
    }, [])
    const updateLocalCart = (newCart) => {
        setLocalCart(newCart)
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = JSON.parse(localStorage.getItem('local-cart')) || []
            setLocalCart(storedCart)
        }
    }, [])
    return (
        <>
            {localCart.map((item, i) => (
                <div key={i} >
                    <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:flex md:flex-row sm:flex sm:flex-row max-sm:grid max-sm:grid-cols-4 my-5 lg:gap-x-4 md:gap-x-4 sm:gap-x-4 max-sm:gap-x-4 items-start w-full">
                        <Image src={item.image} alt="..." layout="fixed" width={150} height={150} className="sm:w-44 max-sm:w-full sm:h-40  max-sm:h-24 rounded-lg object-cover" />
                        <div className="flex flex-col gap-1">
                            <Link href={`/on-your-desk/${item.slug}`}>
                                <p className="font-semibold max-sm:text-[13px] sm:text-md max-sm:text-wrap">{item.nama_peripheral}</p>
                            </Link>
                            <p className="text-md max-sm:text-[13px] sm:text-nowrap max-sm:text-nowrap">Rp {item.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })} </p>
                        </div>
                        <p className="text-color-grey text-sm mx-20 w-full max-sm:hidden">{item.categories}</p>
                        <DeleteCartButton detailLocalSlug={item.slug} toast={toast} updateLocalCart={updateLocalCart}/>
                    </div>
                    <Separator className="lg:w-[92%] md:w-full" />
                </div>
            ))}
        </>
    )
}

export default LocalCart;