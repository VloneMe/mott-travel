import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    desc: string;
    url: string;
    className?: string;
}

export const AboutCard = (
    { title, desc, url, className }: Props
) => {
  return (
    <div className={`bg-white shadow-md 
                        p-5 space-y-3 
                        border-l-2 border-gray-500 
                        hover:border-l-4 
                        transition-all duration-300
                        hover:border-blue-600/80
                        ${className}`}
    >
        <h1 className='text-xl tracking-widest font-bold'
        > {title}</h1>

        <p className='leading-6'
        > {desc}</p>

        <Link href={url}
                className='text-blue-500 hover:text-blue-300 hover:underline'
        > Read more</Link>
    </div>
  )
}
