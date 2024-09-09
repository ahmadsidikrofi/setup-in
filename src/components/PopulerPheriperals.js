import prisma from "@/libs/prisma";
import HeaderSection from "./HeaderSection";
import { authUserGithub } from "@/libs/auth";
import PeripheralsCard from "./PeripheralsCard";

const PopulerPeripherals = async () => {
    const peripherals = await prisma?.peripherals.findMany()
    const authUser = await authUserGithub()
    const cartData = await prisma?.cart.findMany({
        where: { user_email: authUser?.email }
    })
    return (
        <main className="mt-24 populer-peripherals">
            <HeaderSection 
                titleHeader="Populer Peripherals"
                descHeader="Explore all interior furniture we offer from"
                linkContent="Shop the peripherals"
                linkHeader="/peripherals"
            />
            <PeripheralsCard peripherals={peripherals} authUser={authUser} cartData={cartData}/>
        </main> 
    );
}
 
export default PopulerPeripherals;