import { SignInForm } from '@/components/forms/SignInForm';
import { MottHeader } from '@/components/mott-header';
import React from 'react';



export default function page() {
  return (
    <section className='min-h-screen w-6/12 mx-auto 
                        flex flex-col justify-center 
                        items-center space-y-8 relative'
    > 
        <MottHeader className='absolute top-16 z-[3]'
        />
        <SignInForm className='border-t-2' 
        />
    </section>
  )
}
