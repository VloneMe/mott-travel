'use client';
import React from 'react';
import { Container } from '../Container';
import { Logo } from '../navbar/Logo';
import Link from 'next/link';
import { navigation, socialLinks, story } from '@/dataStore/footer';
import { TravelCard } from './TravelCard';
import { footerData } from '@/dataStore';

export const Footer = () => {
  return (
    <footer className='w-full min-h-[47vh] 
                      bg-gray-300 flex flex-col 
                     items-center justify-center'>

        <TravelCard />
        <Container className='grid grid-cols-4 gap-4 mb-5 pt-'>

            {/* Logo Infos for a brand */}
            <div className='space-y-3'>
              <Logo className='bg-gray-800 w-40 p-5 rounded'
              />

              <div className=''>
                <h3 className='text-3xl font-bold text-gray-700'
                >You are why we travel</h3>
                <p className='text-lg text-gray-700'
                >Meet your best Tavelling Agent</p>
              </div>
            </div>

            {/* Navigations links */}
            <ul>
              <h2 className='text-2xl'
              >Navigation</h2>

              {navigation.map((data, index) => (
                <li key={index}
                      className='text-lg hover:text-blue-500 
                                  hover:underline text-gray-600'
                >
                  <Link href={data.url}>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* story links */}
            <ul>
              <h2 className='text-2xl'
              >Related Stories</h2>

              {story.map((data, index) => (
                <li key={index}
                      className='text-lg hover:text-blue-500 
                                  hover:underline text-gray-600'
                >
                  <Link href={data.url}>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <ul>
              <h2 className='text-2xl'
              >Connect with Us</h2>

              {socialLinks.map((data, index) => (
                <li key={index}
                      className='text-lg hover:text-blue-500 
                                  hover:underline 
                                  text-gray-600 
                                  '
                >
                  <Link href={data.url}
                        className='flex items-center space-x-3 gap-3'
                  >
                    <span className='text-xl'
                    >{data.icon}</span>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
        </Container>

        <div className='w-full'>
          <hr className='w-full py-5 h-8' 
          />
          <Container>

          </Container>
        </div>
    </footer>
  )
}
