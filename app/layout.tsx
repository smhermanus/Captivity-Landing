import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
})
import { ReactNode } from 'react'

export const metadata = {
  title: 'Captivity',
  description: 'Captivity Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
