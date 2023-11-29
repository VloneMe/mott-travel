import { SignInForm } from '@/components/forms/SignInForm';
import { MottHeader } from '@/components/mott-header';
import React from 'react';



export default function page() {
  return (
    <section className='min-h-screen w-full flex flex-col 
                        justify-center items-center 
                        space-y-8 py-24 
                        bg-gray-950/10'
    > 
        <MottHeader className='absolute top-8 z-[3]'
        />
        <SignInForm className='border-t-2' 
        />
    </section>
  )
}
