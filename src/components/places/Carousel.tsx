import { images } from '@/dataStore/images';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
    slides?: ReactNode
}

export const Carousel = ({ slides }: Props) => {
  return (
    <div className='md:grid flex overflow-hidden lg:grid-cols-4 grid-cols-1 gap-4 '
    >
        {images.map((data, index) => (
            <div key={index}
                    className='w-full rounded-3xl space-y-2'
            >
               <Image src={data.img} 
                        alt={`image of ${data.title}`}
                        className='h-[355px] rounded'
               />
               
               <div className='flex  items-center justify-between'
               >
                    <div
                    >
                        <h3 className='text-xl font-bold'
                        > {data.title}</h3>
                        <span
                        >most recommended</span>
                    </div>

                    <span
                    > Rating: {4.3}</span>

               </div>
            </div>
        ))}
    </div>
  )
}
