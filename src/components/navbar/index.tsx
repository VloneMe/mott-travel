'use client';
import React, { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Logo } from './Logo';
import { NavList } from './NavList';
import { Button } from '../ui/button';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from '../modal';
import { SignInForm } from '../forms/SignInForm';

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(true);
    const [showModel, setShowModel] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120){
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },)
  return (
    <nav className={`w-full h-[70px] 
                    border-none shadow-md 
                    border-b-2 fixed z-[5]
                    transition-all duration-700
                    ${ scrolled ? ' bg-white/70' : ''}`}
    >
        <Container className='flex h-full items-center justify-between'>
            <div className='flex h-full items-center'>
                <Logo className={` ${scrolled ? "bg-gray-500 rounded" : ""}`}
                />
                <Link   href='/' 
                        className={`text-white md:text-2xl 
                                        text-lg font-bold transition duration-500
                                        ${scrolled ? 'text-black/80 pl-3' : ''}`}> 
                    Mott Travels
                </Link>
            </div>

            <div className='flex h-full items-center space-x-5'>
                <div className='flex h-full items-center space-x-5'>
                    <NavList className={`text-white hidden 
                                            md:flex capitalize 
                                            ${scrolled ? 'text-black/70' : ''}`}/>

                    <Button onClick={() => setShowModel(true)} 
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

        <Modal isVisible={showModel} 
                onClose={() => {setShowModel(false)}}
                header='Sign in form'
        >
            <Container className=''
            >
                <SignInForm />
            </Container>
        </Modal>
    </nav>
  )
}