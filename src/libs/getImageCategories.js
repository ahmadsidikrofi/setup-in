const GetImageCategories = ({ category }) => {
    const images = {
        keyboard: '/keyboard.jpg',
        mouse: '/mouse.jpg',
        deskmat: '/deskmat.jpg',
        deskshelf: '/deskshelf.jpg',
    }
    const formattedCategory = category.trim().toLowerCase()
    console.log("Kategori:", formattedCategory)
    return images[formattedCategory] || '/default.jpg'
}
export default GetImageCategories;