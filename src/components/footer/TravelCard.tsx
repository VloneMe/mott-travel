import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Container } from '../Container'
import { Modal } from '../modal';
import { SignInForm } from '../forms/SignInForm';

export const TravelCard = () => {

  const [showModel, setShowModel] = useState(false);

  return (
    <div className={`w-5/12 h-40 bg-white/70 
                      rounded flex border-gray-800/40 
                       shadow-xl -top-20 
                      border-t-2 px-5 mx-auto 
                      ${showModel ? '' : 'relative'}`}
    >
      <Container className='flex  items-center justify-between'>
        <div className='flex-col'>
          <h2 className='text-3xl font-bold tracking-wider'
          >Ready To Travel</h2>

          <p className='text-xl text-gray-700/75'
          >We are All set for you?</p>
        </div>
        
        <Button onClick={() => setShowModel(true)} 
                className='md:text-lg'
        >
          Let"s Travel
        </Button>
      </Container >
      <Modal isVisible={showModel} 
              onClose={() => setShowModel(false)}
              header='Sign in form'
      >
        <Container className=''
        >
          <SignInForm className='w-full'/>
        </Container>
      </Modal>
    </div>
  )
}
