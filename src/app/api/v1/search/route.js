import prisma from "@/libs/prisma"

export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('query')
    const resultData = await prisma.peripherals.findMany({
        where: {
            nama_peripheral: {
                contains: query,
                mode: 'insensitive'
            }
        }
    })
    if (!resultData) return Response.json({ status: 404, message: "Peripheral tidak ditemukan" })
    else return Response.json({ status: 200, resultData }) 
}