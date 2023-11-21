'use client';

import React from 'react'
import { Container } from '../Container'
import { Logo } from './Logo'
import { NavList } from './NavList'
import { Button } from '../ui/button'
import Link from 'next/link'

import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <nav className='w-full h-[70px] border-none shadow-md   border-b-2 fixed z-10'>
        <Container className='flex h-full items-center justify-between'>
            <div className='flex h-full items-center'>
                <Logo />
                <Link   href='/' 
                        className='text-white md:text-2xl text-lg'> 
                    Mott Travels
                </Link>
            </div>

            <div className='flex h-full items-center space-x-5'>
                <div className='flex h-full items-center space-x-5'>
                    <NavList className='text-white hidden md:flex'/>

                    <Button 
                            size='lg'
                            className='md:text-lg sm:block hidden'
                    > Let's Travel</Button>
                </div>

                {/* Menu control */}

                <GiHamburgerMenu 
                                // size={32}
                                className='md:hidden text-white text-2xl' 
                />
            </div>
        </Container>
    </nav>
  )
}