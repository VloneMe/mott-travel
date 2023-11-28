import React from 'react';
import { Logo } from '../navbar/Logo';
import Link from 'next/link';

interface Props {
    className?: string;
}

export const MottHeader = (
    { className }: Props
) => {
  return (
    <Link   href='/' 
            className={`flex flex-col items-center 
                    bg-gray-800/30 p-6
                    rounded-lg space-y-3 
                    ${className}`}
    >
        <Logo className='shadow-lg shadow-white bg-black/75 rounded-sm' 
        />

        <h1 className='text-xl font-bold tracking-widest'
        >
            Mott Travels
        </h1>
    </Link>
  )
}