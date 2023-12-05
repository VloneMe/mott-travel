'use client';

import { Container } from '../Container';
import { Logo } from './Logo';
import { NavList } from './NavList';
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from '../modal';
import { SignInForm } from '../forms/SignInForm';
import { SignUpForm } from '../forms/SignUpForm';
import { useNavHooks } from '@/hooks/useNavHooks';

export const Navbar = () => {

    const { scrolled, setScrolled, 
            showModel, setShowModel 
        } = useNavHooks();
    
  return (
    <nav className={`w-full h-[70px] 
                    border-none shadow-md 
                    border-b-2 fixed z-[5]
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

            <div className='flex h-full items-center space-x-5'>
                <div className='flex h-full items-center space-x-5'>
                    <NavList className={`text-white hidden 
                                            md:flex capitalize 
                                            ${scrolled ? 'text-gray-950/75' : ''}`}/>

                    <Button onClick={() => setShowModel(true)} 
                             size='lg'
                            className='md:text-lg sm:block hidden'
                    > Let's Travel</Button>

                    <Link href='/dashboard/admin'
                            className={buttonVariants()}
                    >
                        Dashboard
                    </Link>
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
                <SignUpForm className='w-full'  />
            </Container>
        </Modal>
    </nav>
  )
}