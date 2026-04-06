import type { Metadata } from 'next'
import { Epilogue, Manrope } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-epilogue',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Lulu's Streetfood | Truck Explorer",
  description:
    'Upplev hantverket bakom våra skräddarsydda matvagnar. Designade för prestanda, byggda för passion.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="sv"
      className={`${epilogue.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#1A1A1A] font-body antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
