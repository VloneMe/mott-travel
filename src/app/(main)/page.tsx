import { Hero } from '@/components/Hero'
import { Faq } from '@/components/faq'
import { Places } from '@/components/places'
import React from 'react'
import MainLayout from './layout'

export default function MainRoot() {
  return (
    <main>
        <MainLayout>
            <Hero />
            <Places />
            <Faq />
        </MainLayout>
    </main>
  )
}
