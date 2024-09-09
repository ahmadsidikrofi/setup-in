import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"

export async function GET({ params }) {
    const slug = params.slug
    const cartItem = await prisma.cart.findUnique({
        where: { slug: slug }
    })
    if (!cartItem) return Response.json({ status: 404, message: "Cart is empty" })
    else return Response.json({ status: 200, cartItem })
}

export async function DELETE(request, { params }) {
    const slug = params.slug
    const authUser = await authUserGithub()
    
    const deleteCartItem = await prisma.cart.delete({
        where: {
            slug_user_email: {
                slug: slug,
                user_email: authUser.email
            }
        }
    })
    // const deleteCartItem = await prisma.cart.delete({ where: { slug: slug } })
    if (!deleteCartItem) return Response.json({ status: 500, isDelete: false, message: "Peripheral gagal terhapus", deleteCartItem })
    else return Response.json({ status: 200, isDelete: true, message: "Peripheral berhasil dihapus", deleteCartItem })
}
