'use client'
import { driver } from "driver.js"
import "driver.js/dist/driver.css"
import { useEffect } from "react"
const HomeTour = () => {
    useEffect(() => {
        const isTourComplete = localStorage.getItem("UserHasTouring")
        if (!isTourComplete) {
            const driverObj = driver({
                showProgress: true,
                showButtons: ['next', 'previous'],
                steps: [
                    { element: '.jumbotron-title', popover: { title: 'Selamat datang di Setup-in', description: 'Nyamankan dirimu dalam berbelanja. Tanpa tekanan buat tokomu sendiri atau cari peripheral impianmu', side: "left", align: 'start' } },
                    { element: '.shop-now', popover: { title: 'Pilih peripheral sekarang', description: 'Lihat-lihat atau bandingkan peripheral antar toko dengan variasi harga yang menarik.', side: "bottom", align: 'start' } },
                    { element: '.sell-now', popover: { title: 'Buka tokomu', description: 'Ingin buka usaha? bisa dengan masuk ke area ini dan buka tokomu sendiri!.', side: "bottom", align: 'start' } },
                    { element: '.search-peripheral ', popover: { title: 'Mulai mencari', description: 'Ketik peripheral untuk setup apapun yang kamu suka dan mudahnya hasil akan secara elastis memberimu rekomendasi.', side: "bottom", align: 'start' } },
                    { element: '.cart-driver', popover: { title: 'Penuhkan keranjang', description: 'Barang yang kamu pilih akan masuk ke keranjang. Jangan sungkan ya untuk cek keranjangmu dan checkout selagi bisa😂', side: "bottom", align: 'start' } },
                    { element: '.signin', popover: { title: 'More Exploration', description: 'Mulai penjelajahan lebih dalam dengan satu kali ketuk.', side: "bottom", align: 'start' } },
                    { element: '.ftCategories', popover: { title: 'Yang dikategorikan', description: 'Dalam Setup-in terdapat 4 buah kategori yaitu Keyboard, Mouse, Deskmat, dan Deskshelf.', side: "top", align: 'start' } },
                    { element: '.product-categories', popover: { title: 'Kategori Produk', description: 'Setiap produk akan memiliki 1 kategori.', side: "top", align: 'start' } },
                    { element: '.populer-furnitures', popover: { title: 'Peripheral Terpopuler', description: 'Setiap peripheral yang keren akan kami tampilkan disini.', side: "right", align: 'start' } },
                    { element: '.cart-now', popover: { title: 'No ribet', description: 'Dari sini kamu bisa masukkan ke keranjang tanpa pandang bulu.', side: "top", align: 'start' } },
                    { popover: { title: 'And that is all!', description: 'Pergilah dan eksplorasi sendiri dengan kemauanmu. Tugasku hanya sampai sini dalam memandu para customer. Make your setup lads 🥰' } }
                ],
            })
            localStorage.setItem("UserHasTouring", "true")
            driverObj.drive()
        }
        // console.log(driverObj)
    }, [])
    return null
}
export default HomeTour