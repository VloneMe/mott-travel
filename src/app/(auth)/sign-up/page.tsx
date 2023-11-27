import { SignUpForm } from '@/components/forms/SignUpForm';
import React from 'react';

export default function page() {
  return (
    <section className='min-h-screen w-full flex 
                        justify-center items-center'
    >
        <SignUpForm />
    </section>
  )
}
