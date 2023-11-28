import React, { ReactNode } from 'react'
import { Button } from '../ui/button';

interface Props {
    children: ReactNode;
}

export const GoogleSignInBtn = (
    { children }: Props
) => {

    const LoginWithGoogle = () => console.log('Login With Google!');
  return (
    <Button onClick={LoginWithGoogle} 
            className='w-full bg-black'
    >
        {children}
    </Button>
  )
};