import React from 'react';
import { Container } from '../Container';
import { aboutDAta } from './data';
import { AboutCard } from './AboutCard';

export const AboutUs = () => {
  return (
    <section id="about"
             className='min-h-screen w-full shadow-lg flex   items-center py-24'
    >
        <Container className='w-full h-full flex flex-col items-center space-y-8    '
        >
            <div className='text-center space-y-5 md:w-10/12'
            >
                <h1 className='text-4xl font-bold tracking-widest'
                > Who We Are?</h1>

                <p className='text-lg'
                >
                    Welcome to Mott Travels, where passion meets innovation, and every project is a journey of creativity and excellence. Founded 2015, we take pride in being a [Industry/Service] company that stands at the forefront of [Describe Your Niche or Expertise]. Our story is a testament to a shared vision, dedication, and a commitment to delivering unparalleled value to our clients.
                </p>
            </div>

            <div className='grid grid-cols-2 gap-7'
            >
                {aboutDAta.map((data, index) => (
                    <AboutCard key={index}
                                title={data.title}
                                desc={data.desc}
                                url={data.url}
                                className=''
                    />
                ))}
            </div>
        </Container>
    </section>
  )
}
