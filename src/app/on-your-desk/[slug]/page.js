import AddCartFunction from "@/components/AddCartFunction"
import { Separator } from "@/components/ui/separator"
import WAButton from "@/components/WAButton"
import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from "next/link"

const peripheralsData = async (slug) => {
    const data = await prisma?.peripherals.findUnique({
        where: { slug: slug },
        include: { Store: true }
    })
    return data
}

const StoreRelatedPeripheral = async (storeId) => {
    const data = await prisma?.Peripherals.findMany({
        where: { store_id: storeId }
    })
    return data
}

const DetailPeripheralPage = async ({ params }) => {
    const { slug } = params
    const detailData = await peripheralsData(slug)
    const storeRelatedPeripheral = await StoreRelatedPeripheral(detailData.store_id)
    const authUser = await authUserGithub()
    const telp = "62" + detailData.Store.telp
    const chat = `Halo, saya tertarik dengan peripheral ${detailData.nama_peripheral} yang dijual seharga Rp${detailData.harga.toLocaleString('id-ID')} dengan link sebagai berikut:`
    const link = `https://furnicraft-shop.vercel.app/furnitures/${detailData.slug}`
    const waLink = `https://wa.me/${telp}?text=${chat}%0A${link}`
    return ( 
        <main>
            <div className="xl:px-16 lg:px-16 px-4 py-6">
                <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 items-start gap-7">
                    <div>
                        <Image src={detailData.image} className="rounded-xl md:object-cover lg:object-cover xl:object-cover object-fill w-full xl:h-[600px] lg:h-[600px] md:h-[600px] h-full" alt="..." width={1280} height={768} />
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <WAButton waLink={waLink} detailData={detailData}/>
                        <h3 className="font-semibold text-color-accent2 text-4xl">{detailData.nama_peripheral}</h3>
                        <h5 className="font-medium text-color-secondary text-2xl">Rp {detailData.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</h5>
                        <p className="text-color-grey text-lg font-normal">{detailData.Store.nama_toko}</p>
                        <hr className="w-full opacity-15 border-color-grey" />
                        <p className="font-medium text-color-secondary text-lg">Deskripsi peripheral : </p>
                        <p>{detailData.deskripsi}</p>
                        <AddCartFunction
                            nama_peripheral={detailData.nama_peripheral}
                            harga={detailData.harga}
                            categories={detailData.categories}
                            image={detailData.image}
                            id_peripherals={detailData.id}
                            slug={detailData.slug}
                            authUser={authUser}
                        />
                    </div>
                </div>
            </div>
            <div className="my-10">
                <Separator />
            </div>
            <div className="xl:px-16 lg:px-16 px-4">
                <h1 className="text-xl text-color-accent2 font-semibold">PRODUK LAIN DARI TOKO INI</h1>
                <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-8">
                    {storeRelatedPeripheral.map((related, i) => (
                        <Link href={`/on-your-desk/${related.slug}`} key={i}>
                            <Card className='h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all ease-linear group' >
                                <CardHeader className='p-0'>
                                    <AspectRatio ratio={1 / 1} className='m-2'>
                                        <div className="w-full h-full overflow-hidden rounded-2xl">
                                            <Image src={related.image} width={768} height={768} alt="..." className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                        </div>
                                    </AspectRatio>
                                </CardHeader>
                                <CardContent className='grid gap-2.5 p-4'>
                                    <p className="font-normal text-sm">{related.categories}</p>
                                    <p className="font-semibold text-xl">{related.nama_peripheral.length > 19 ? related.nama_peripheral.substring(0, 26) + "..." : related.nama_peripheral}</p>
                                    <p className="border border-color-accent2 px-2 text-[10px] text-color-accent2 w-1/2">Pilihan terbaik</p>
                                </CardContent>
                                <CardFooter className='px-4'>
                                    <p className="font-semibold text-lg text-color-accent2">{related.harga.toLocaleString("id-ID", {minimumFractionDigits: 2})}</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
 
export default DetailPeripheralPage;