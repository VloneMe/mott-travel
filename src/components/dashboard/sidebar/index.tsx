'use client';

import { Container } from '@/components/Container'
import { Logo } from '@/components/navbar/Logo'
import { useNavHooks } from '@/hooks/useNavHooks';
import Link from 'next/link'
import React from 'react'

export const Sidebar = () => {

      const { scrolled, setScrolled, 
        showModel, setShowModel 
    } = useNavHooks();

  return (
    <section className='h-full w-36 flex flex-col border border-gray-500'
    >
        <Container className='flex flex-col'
        >
          <div className='flex h-full items-center'>
                <Logo className={` ${scrolled ? "bg-black/75 rounded" : ""}`}
                />
                <Link   href='/' 
                        className={`text-white md:text-2xl 
                                        text-lg font-bold transition duration-500
                                        ${scrolled ? 'text-gray-950/75 pl-3' : ''}`}> 
                    Mott Travels
                </Link>
            </div>

            <div
            > Logo list</div>
        </Container>
    </section>
  )
}
