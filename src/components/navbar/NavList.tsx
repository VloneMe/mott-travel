import Link from 'next/link';
import React from 'react';

interface Props {
    className?: string;
}

const navLinks = [
    {
        id: 1,
        name: 'home',
        url: '#/'
    },{
        id: 1,
        name: 'about',
        url: '/#about'
    },{
        id: 2,
        name: 'places',
        url: '/#places'
    },{
        id: 3,
        name: 'faqs',
        url: '/#faqs'
    },
]

export const NavList = ({ className }: Props) => {
  return (
    <div className={`space-x-5 ${className}`}>
        {navLinks.map((link, index) => (
            <Link   key={index}
                    href={link.url}
                    className='text-lg'
            >
                {link.name}
            </Link>
        ))}
    </div>
  )
}
