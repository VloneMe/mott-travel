import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss';

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
          {children}
      </body>
    </html>
  )
}