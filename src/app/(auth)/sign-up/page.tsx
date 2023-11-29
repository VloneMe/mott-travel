import { SignUpForm } from '@/components/forms/SignUpForm';
import { MottHeader } from '@/components/mott-header';
import React from 'react';

export default function page() {
  return (
    <section className='min-h-screen w-full flex flex-col 
                        justify-center items-center 
                        space-y-8 py-24 
                        bg-gray-950/10'
    >
        <MottHeader className='absolute top-8' 
        />
        <SignUpForm className='border-t-2'
        />
    </section>
  )
}
