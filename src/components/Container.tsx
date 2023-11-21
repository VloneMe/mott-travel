import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Container = (
    { children, className }: Props
) => {
  return (
    <div className={`container mx-auto sm:px-10 px-3 max-w-[2520px] ${className}`}>
        {children}
    </div>
  )
}
