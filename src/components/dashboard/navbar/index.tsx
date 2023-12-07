'use client';

import { NavList } from './NavList';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";
import { useNavHooks } from '@/hooks/useNavHooks';
import {    Avatar,
            AvatarFallback,
            AvatarImage
        } from "@/components/ui/avatar";
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/modal';
import { Logo } from '@/components/navbar/Logo';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Session } from '../Session';


export const Navbar = () => {

    const { scrolled, setScrolled, 
            showModel, setShowModel 
        } = useNavHooks();
    
  return (
    <nav className={`w-full h-[70px] 
                    border-none shadow-md 
                    border-b-2 fixed
                    transition-all duration-700
                    ${ scrolled ? 'bg-white/80' : 'bg-none'}`}
    >
        <Container className='flex h-full items-center justify-between'>
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
        </Container>
    </nav>
  )
}