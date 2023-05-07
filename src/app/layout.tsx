import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo_mtj.svg" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Menoreh Tanjung Jaya</title>
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}