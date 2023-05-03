import Navbar from '../components/navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
  title: 'Menoreh Tanjung Jaya',
  icons: 'https://cahyaaji.github.io/mtj-landing-pages/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className='px-2 content-center shadow-lg sticky top-0 z-50 bg-[#FFFFFF]'><Navbar/></header>
        {/* bg-gradient-to-r from-blue-deep from-5% */}
        {children}
        </body>
    </html>
  )
}



