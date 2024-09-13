import PeripheralsCard from "@/components/PeripheralsCard"
import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Link from "next/link"

const OnYourDeskPage = async () => {
    const authUser = await authUserGithub()
    const peripherals = await prisma?.peripherals.findMany()
    const countFurniture = await prisma?.peripherals.count()
    const email = authUser?.email
    return (
        <main className="pt-16 xl:px-16 sm:px-4 max-sm:px-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-4xl text-color-accent2">Peripherals ({countFurniture})</h3>
                    <p className="text-sm font-normal text-color-grey py-2">Get to know to our interior future furniture we offer</p>
                </div>
            </div>
            <PeripheralsCard authUser={authUser} peripherals={peripherals} email={email}/>
        </main>
    )
}
export default OnYourDeskPage