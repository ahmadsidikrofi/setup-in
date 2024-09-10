'use client'
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Button } from "./ui/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import SearchSkeleton from "./skeleton/SearchSkeleton"
  
const SearchPeripheral = ({ setIsSearchOpen }) => {
    const router = useRouter()
    const [closeSearchbar, setCloseSearchbar] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (searchValue.trim()) {
            setIsLoading(true)
            setTimeout(setIsLoading(false), 3000)
            axios.get(`/api/v1/search?query=${searchValue}`)
            .then((res) => {
                setSearchResult(res.data.resultData || [])
            })
        }
    }, [searchValue])

    const handleCloseSearchbar = () => {
        setCloseSearchbar(true)
        setIsSearchOpen(false)
        document.body.classList.remove('overflow-hidden')
    }
    const groupedResults = searchResult.reduce((acc, item) => {
        if (!acc[item.categories]) {
            acc[item.categories] = [];
        }
        acc[item.categories].push(item);
        return acc;
    }, {})
    const handleDetailPeripheral = (slug) => {
        router.push(`/on-your-desk/${slug}`)
    }
    return (
        <>
        <div className="fixed inset-0 z-20 bg-color-primary bg-opacity-50 backdrop-blur-sm" onClick={handleCloseSearchbar}></div>
        <div className="sticky z-20">
            <motion.div className="fixed top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ y: -300, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ type: 'spring', duration: 1 }}
            >
                <Command className="rounded-lg border shadow-md md:w-[85vh] max-sm:w-[40vh] sm:w-[40vh]">
                    <CommandInput onValueChange={(value) => setSearchValue(value)} placeholder="Cari gear gamingmu" />
                    <CommandList>
                        {isLoading ? <SearchSkeleton /> : (
                            Object.keys(groupedResults).length > 0 ? (
                                Object.keys(groupedResults).map((category, index) => (
                                    <div key={index}>
                                        <CommandGroup heading={category}>
                                            {groupedResults[category].map((result, i) => (
                                                <div className="hover:bg-accent hover:text-accent-foreground" onClick={() => handleDetailPeripheral(result.slug)} key={i}>
                                                    <CommandItem>{result.nama_peripheral}</CommandItem>
                                                </div>
                                            ))}
                                        </CommandGroup>
                                    </div>
                                )) 
                            ) : (
                                <CommandEmpty>Tidak membuahkan hasil.</CommandEmpty>
                            )
                        )}
                    </CommandList>
                </Command>
            </motion.div>
        </div>
        </>
    )
}
export default SearchPeripheral