import prisma from "@/libs/prisma"

export async function GET(request, { params }) {
    const { category } = params
    try {
        const peripheralCategory = await prisma.Peripherals.findMany({
            where: { 
                categories: {
                    equals: category,
                }
            }
        })
        console.log(peripheralCategory)
        if (!peripheralCategory) return Response.json({ status: 404 })
        return Response.json({ status: 200, data: peripheralCategory })
    } catch (error) {
        console.error(error)
        return Response.json({ status: 500, message: 'Internal Server Error' })
    }
}