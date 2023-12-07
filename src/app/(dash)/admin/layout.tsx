import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/dashboard/navbar';
import { Sidebar } from '@/components/dashboard/sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mott Travels',
  description: "Let's Travel Togather And ExploreThe Beauty Of The Nature",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen w-full'
      >
        <Navbar />
        <main className='flex flex-row'
        >
            {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}