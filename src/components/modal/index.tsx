'use client';

import React, { MouseEventHandler, ReactNode, useState } from 'react'
import { Container } from '../Container';
import { VscChromeClose } from "react-icons/vsc";

interface Props {
    children?: ReactNode;
    className?: string;
    onClose: () => void;
    isVisible?: Boolean;
}

export const Modal = (
    { children, className, isVisible, onClose }: Props
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
                                justify-center items-center 
                                ${className}`}
        > 
          <button onClick={() => onClose()}
                  className='bg-blue-900 
                              hover:bg-blue-800 
                              focus:outline-none text-sm 
                              rounded-lg px-5 py-2.5 
                              text-center mr-5 cursor-pointer 
                              text-white/50 font-extrabold'
          >
            <VscChromeClose size={30}/>
          </button>
          <div className='bg-white'
          >
            {children}
          </div>
        </Container>
    </section>
  )
}