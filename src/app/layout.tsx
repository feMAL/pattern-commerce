import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components'
import { CartProvider } from '@/context/cart.provider'
import dynamic from 'next/dynamic'
import { ProductProvider } from '@/context/products.provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false });

  return (
    <html lang="en">
      <body className={`block`}>
        <CartProvider>
          <ProductProvider>
            <NavBar/>
              {children}
            <Footer/>
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  )
}
