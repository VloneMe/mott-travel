import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mott Travels',
  description: "Let's Travel Togather And ExploreThe Beauty Of The Nature",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}