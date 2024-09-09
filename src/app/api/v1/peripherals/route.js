import prisma from "@/libs/prisma"

export async function POST (request) {
    const { nama_peripheral, slug, deskripsi, harga, categories, image, store_id } = await request.json()
    const data = { nama_peripheral, slug, deskripsi, harga: parseFloat(harga), categories, image, store_id }
    const createPeripheral = await prisma.Peripherals.create({ data })
    if (!createPeripheral) return Response.json({ status: 500, isCreated: false, error: error.message, createPeripheral })
    else return Response.json({ status: 201, isCreated: true, createPeripheral })
}