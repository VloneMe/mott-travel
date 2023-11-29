import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function MainLayout(
  { children }: Props
) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}