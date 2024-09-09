import CategoriesCard from "./CategoriesCard"
import HeaderSection from "./HeaderSection"
import prisma from "@/libs/prisma"
import HomeTour from "./drivers/HomeTour"
import { authUserGithub } from "@/libs/auth"


const FtCategories = async() => {
    const authUser = await authUserGithub()
    const categories = 0
    // const categories = await prisma?.DeskProduct.groupBy({
    //     select: {
    //         categories: true,
    //     },
    //     by: ["categories"],
    //     _count: {
    //         _all: true
    //     }
    // })
    return (
        <div className="ftCategories">
            {/* {authUser === false && <HomeTour />} */}
            <HeaderSection 
                titleHeader="Featured Categories" 
                descHeader="Find the best your match gears from stores in" 
                linkContent="Explore the categories" 
                linkHeader="/categories"
            />
            {/* <CategoriesCard categories={categories} authUser={authUser}/>             */}
        </div>
    )
}
export default FtCategories