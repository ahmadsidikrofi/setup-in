import JumbotronCategory from "@/components/JumbotronCategory"
import PeripheralsCard from "@/components/PeripheralsCard"
import axios from "axios"

const FurnitureKeyword = async ({params}) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const res = await axios.get(`http://localhost:3000/api/v1/categories/${decodeKeyword}`)
    const resultPeripheralKeyword = res.data.data || []
    const countResult = resultPeripheralKeyword.length
    return (
        <main>
            <section className="xl:px-16 sm:px-4 max-sm:px-4">
                <JumbotronCategory countResult={countResult} decodeKeyword={decodeKeyword}/>
                <PeripheralsCard peripherals={resultPeripheralKeyword}/>
            </section>
        </main>
    )
}
export default FurnitureKeyword