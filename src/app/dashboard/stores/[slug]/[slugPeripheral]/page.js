import FormUpdatePeripheral from "@/components/FormUpdatePeripheral"
import { Separator } from "@/components/ui/separator"
import prisma from "@/libs/prisma"

const storeId = async (slug) => {
    const dataStore = await prisma.Store.findUnique({
        where: { slug: slug }
    })
    return dataStore
}
const peripheralId = async (slugPeripheral) => {
    const dataPeripheral = await prisma.peripherals.findUnique({
        where: { slug: slugPeripheral }
    })
    return dataPeripheral
}
const UpdateFurniture = async ({ params }) => {
    const { slug } = params
    const { slugPeripheral } = params
    const dataStore = await storeId(slug)
    const dataPeripheral = await peripheralId(slugPeripheral)
    return (
        <main>
            <div className="space-y-0.5 lg:px-6 w-[73vw]">
                <h2 className="text-3xl font-bold tracking-tight text-color-accent2">Store Dashboard</h2>
                <p className="text-muted-foreground">
                    Manage your store here.
                </p>
            </div>
            <Separator className="my-6 w-[90vw] lg:w-[73vw] max-sm:w-[80vw] md:none" />
            <div className="border border-opacity-30 border-color-accent2 rounded-lg p-5 lg:mx-8">
                <h2 className="text-color-accent2 font-bold text-2xl">Edit Peripheral</h2>
                <p className="text-muted-foreground text-sm">
                    Edit your furniture from your store
                </p>
                <div className="mt-5">
                    <FormUpdatePeripheral storeId={dataStore.id} slugStore={dataStore.slug} dataPeripheral={dataPeripheral}/>
                </div>
            </div>
        </main>
    )
}
export default UpdateFurniture