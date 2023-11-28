'use client';

import React, { MouseEventHandler, ReactNode, useState } from 'react'
import { Container } from '../Container';
import { VscChromeClose } from "react-icons/vsc";

interface Props {
    children?: ReactNode;
    className?: string;
    onClose: () => void;
    isVisible?: Boolean;
    header?: string;
}

export const Modal = (
    { children, className, isVisible, onClose, header }: Props
) => {

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === 'wrapper') onClose();
  }

    const [allow, SetAllow] = useState(true);
  return (
    <section  id="wrapper"
              onClick={() => handleClose}
              className={`fixed inset-0 z-20 bg-black 
                          bg-opacity-30
                          backdrop-blur-sm flex`}
    >
        <Container className={`flex flex-col 
                                justify-center items-center w-8/12 
                                ${className}`}
        > 
          <button onClick={() => onClose()}
                  className='bg-blue-900/40 text-gray-600
                              hover:bg-red-800/20 
                              focus:outline-none text-sm 
                              rounded-lg px-5 py-2.5 
                              text-center mr-5 cursor-pointer 
                              text-white/50 font-extrabold
                              absolute top-20 right-[430px]'
          >
            <VscChromeClose size={20}/>
          </button>
          <div className='bg-white/90 w-9/12 
                            min-h-[60dvh] flex 
                            flex-col justify-center
                            items-center rounded-md 
                            space-y-7 p-9'
          > 
            <h2 className='font-bold text-3xl tracking-wider'
            >Welcome To Mott Travels</h2>
            {children}
          </div>
        </Container>
    </section>
  )
}