import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { CartProvider } from './context/cart-context'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'IslandHub',
  description: 'IslandHub is a company ...'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />

          <main className="max-w-[1280px] mx-auto">
            <div className="min-h-screen px-4 lg:px-8 pt-24 pb-0 gap-16 font-[family-name:var(--font-geist-sans)]">
              {children}
              <Footer />
            </div>
          </main>

          <Toaster
            toastOptions={{
              className: 'bg-zinc-800'
            }}
          />
        </CartProvider>
      </body>
    </html>
  )
}
