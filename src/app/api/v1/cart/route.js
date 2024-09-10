import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import slugify from "slugify"

export async function POST( request ) {
    const { id_peripherals, nama_peripheral, user_email, harga, categories, image } = await request.json()
    const data = {
        nama_peripheral, categories, id_peripherals, image, user_email,
        harga: parseFloat(harga),
        slug: slugify(nama_peripheral, { lower: true, strict: true, replacement: "-" })
    }
    try {
        console.log("Data yang dikirim ke Prisma:", data)
        const addItem = await prisma.cart.create({data})
        return Response.json({ status: 200, isCreated: true })
    } catch (err) {
        if (err.code === "P2002") {
            console.log("Peripheral sudah dalam keranjang kamu")
            return Response.json({ status: 409, isCreated: false, message: "Peripheral sudah ada dalam keranjang" })
        } else {
            return Response.json({ status: 500, isCreated: false, message: "Peripheral menolak untuk ke keranjang" })
        }
    }
}

export async function DELETE () {
    const authUser = await authUserGithub()
    const deleteAllCart = await prisma?.cart.deleteMany({
        where: { user_email: authUser?.email }
    })
    if (!deleteAllCart) return Response.json({ status: 500, isDelete: false })
    else return Response.json({ status: 200, isDelete: true })
}