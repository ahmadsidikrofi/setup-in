import Image from "next/image";
import prisma from "@/libs/prisma";
import CheckoutButton from "@/components/CheckoutButton";
import DeleteCartButton from "@/components/DeleteCartButton";
import toast, { Toaster } from 'react-hot-toast';
import { Separator } from "@/components/ui/separator";
import { authUserGithub } from "@/libs/auth";
import LocalCart from "@/components/LocalCart";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const CartPage = async () => {
    const authUser = await authUserGithub()
    // const productId = ~~(Math.random() * 100) + 1
    const cartUsers = await prisma?.Cart.findMany({
        where: { user_email: authUser?.email },
        orderBy: { id: 'desc' }
    })
    let totalHarga = 0
    {cartUsers.map((cartUsers) => {
        totalHarga += cartUsers.harga
    })}
    const formatTotHarga = totalHarga.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
    })
    const nama_peripheral = cartUsers.map((cartUser) => cartUser.nama_peripheral)
    const ids = cartUsers.map((cartUser) =>  cartUser.id_peripherals.toString())
    const harga = parseInt(totalHarga)
    return (
        <main>
            <Toaster />
            <div className="py-16 xl:px-16 lg:px-16 sm:px-4 max-sm:px-4">
                <h1 className="text-3xl text-color-accent2 font-bold">Shopping Cart</h1>
                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col items-start justify-between">
                    <div className="mt-10">
                        {authUser ? 
                            cartUsers.length !== 0 ?
                                cartUsers.map((cartUser) => (
                                    <div key={cartUser.id}>
                                        <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:flex md:flex-row sm:flex sm:flex-row max-sm:grid max-sm:grid-cols-4 my-5 lg:gap-x-4 md:gap-x-4 sm:gap-x-4 max-sm:gap-x-4 items-start w-full">
                                            <Image src={cartUser.image} alt="..." layout="fixed" width={150} height={150} className="sm:w-full max-sm:w-full sm:h-40  max-sm:h-24 rounded-lg object-cover" />
                                            <div className="flex flex-col gap-1">
                                                <Link href={`/on-your-desk/${cartUser.slug}`}>
                                                    <p className="font-semibold max-sm:text-[13px] lg:text-lg sm:text-md sm:text-wrap max-sm:text-wrap">{cartUser.nama_peripheral}</p>
                                                </Link>
                                                <p className="text-md max-sm:text-[13px] sm:text-nowrap max-sm:text-nowrap">Rp {cartUser.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })} </p>
                                            </div>
                                            <p className="text-color-grey text-sm mx-20 w-full max-sm:hidden">{cartUser.categories}</p>
                                            <DeleteCartButton detailSlug={cartUser.slug} toast={toast} />
                                        </div>
                                        <Separator className="lg:w-[92%] md:w-full"/>
                                    </div>
                                ))
                                :
                                <div className="">
                                    <p className="text-md text-color-grey">Di keranjangmu belum ada Peripheral dan barang apapun nih 😭</p>
                                </div>
                        : <LocalCart />}
                    </div>
                    <div className={`mx-10 mt-12 bg-color-grey bg-opacity-5 rounded-lg p-8 lg:w-full`}>
                        <h3 className="text-lg font-medium text-color-accent mb-6">Order Summary</h3>
                        <hr className="w-full opacity-15 border-color-grey" />
                        <div className="flex justify-between mt-4">
                            <p className="font-medium">Order total</p>
                            <p className="font-normal">{authUser ? "Rp" + formatTotHarga : <span><Badge className="rounded-full bg-color-accent2">Sign-in</Badge></span>}</p>
                        </div>
                        <CheckoutButton ids={ids} harga={harga} cartUsers={cartUsers} nama_peripheral={nama_peripheral}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CartPage;