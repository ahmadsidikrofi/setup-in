import { PrismaClient } from '../../prisma/generated/client'

// import { PrismaClient } from "../../prisma/node_modules/@prisma/client"

let prisma = global.prisma || new PrismaClient()
console.log(prisma)

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} 

global.prisma = prisma // Simpan prisma ke global

// console.log("Prisma:", prisma)

export default prisma