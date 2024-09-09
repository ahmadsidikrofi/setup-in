import prisma from "@/libs/prisma"
import slugify from "slugify"

export async function PUT (request, { params }) {
    const slug = params.slug
    const { nama_peripheral, deskripsi, harga, categories, image, store_id } = await request.json()
    const updatePeripheral = await prisma.peripherals.update({
        where: { slug: slug },
        data: { nama_peripheral, deskripsi, categories, image, store_id,
            harga: parseFloat(harga),
            slug: slugify(nama_peripheral, { replacement: '-', strict: true, lower: true })
        }
    })
    if (!updatePeripheral) return Response.json({ status: 500, isUpdate: false, message: "Data peripheral gagal di ubah" })
    else return Response.json({ status: 200, isUpdate: true, message: "Data peripheral berhasil diubah", updatePeripheral })
}

export async function DELETE (request, { params }) {
    const slug = params.slug
    const deletePeripheral = await prisma.peripherals.delete({
        where: { slug: slug }
    })
    if (!deletePeripheral) return Response.json({ status: 500, isDelete: false, message: "Data peripheral gagal di hapus" })
    else return Response.json({ status: 200, isDelete: true, message: "Data peripheral berhasil dihapus" })
}