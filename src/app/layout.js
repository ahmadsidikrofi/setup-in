import { Poppins } from 'next/font/google'
import "./globals.css";
import NavbarWrapper from '@/components/NavbarWrapper';
import { authUserGithub } from '@/libs/auth';
import prisma from '@/libs/prisma';
import LoadingTop from '@/components/LoadingTop';
// import 'react-loading-skeleton/dist/skeleton.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Setup-in',
  description: 'Memberikan layanan konsultasi gratis kepada setiap pelanggan untuk memahami kebutuhan dan preferensi mereka terhadap setup yang ingin dibuat.',
}


export default async function RootLayout({ children }) {
  const authUser = await authUserGithub()
  const countCart = await prisma.Cart.count({ 
    where: { user_email: authUser?.email }
  })
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/navbar.ico"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/navbar.ico"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/navbar.ico"/>
      </head>
      <body className={poppins.className}>
        <LoadingTop />
        <NavbarWrapper authUser={authUser} countCart={countCart}/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
