import React from 'react';
import { Container } from '../Container';
import heroImg from 'public/hero-img.png';
import Image from 'next/image';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <section className='w-full lg:h-[80vh] sm:h-[60vh] h-[40vh] relative'>
        <div className='relative'>
            <Image  src={heroImg}
                    alt="hero img"
                    className='w-full lg:h-[80vh] sm:h-[60vh] h-[40vh] bg-cover relative bg-center'
            />

            <div className='w-full h-full bg-black/70 absolute z-1 inset-0'/>
        </div>
        <Container className='  absolute z-2 
                                w-full h-full 
                                flex  justify-center 
                                items-center inset-0'>
            <div className='w-full justify-center flex flex-col sm:space-y-8 space-y-5'>
                <h1 className='text-white lg:text-5xl 
                                sm:text-3xl text-2xl text-center 
                                font-bold tracking-wider'>
                    <span className=''>
                    Let's Travel 
                    </span> Togather And Explore  <br />
                    <span>
                        The Beauty Of The Nature
                    </span>
                </h1>

                <div className='flex space-x-5 justify-center'>
                    <Button variant='outline'
                            size='lg'
                            className='bg-transparent border 
                                        md:text-lg sm:text-lg 
                                        text-base text-white 
                                        hover:text-xl'
                    >Let's Travel</Button>

                    <Button className='md:text-lg sm:text-lg 
                                        text-base hover:shadow-2xl
                                        shadow-white'
                            size='lg'
                    > Our Journey</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}
