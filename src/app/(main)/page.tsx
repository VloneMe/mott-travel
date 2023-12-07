import { Hero } from '@/components/Hero'
import { AboutUs } from '@/components/about'
import { Faq } from '@/components/faq'
import { Places } from '@/components/places'
import React from 'react'

export default function MainRoot() {
  return (
    <main>
            <Hero />
            <AboutUs />
            <Places />
            <Faq />
    </main>
  )
}