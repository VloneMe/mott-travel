'use client';

import React from 'react'
import { Container } from '../Container'
import  { Carousel }  from './Carousel'
import Image from 'next/image'

const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
]

export const Places = () => {
  return (
    <section id="places" 
             className='md:min-h-screen w-full flex items-center shadow-lg'>
        <Container className='h-full w-full space-y-10'
        >
            <div className=''
            >
                <div className='md:w-6/12 space-y-3'>
                    <h1 className='text-4xl font-bold tracking-wider'
                    >Places You Must Pay A Vist!</h1>

                    <p className=''
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
                    </p>
                </div>
            </div>
            <div className=''>
                <Carousel />
            </div>
        </Container>
    </section>
  )
}
