import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Container = (
    { children, className }: Props
) => {
  return (
    <div className={`container mx-auto px-10 max-w-[2520px] ${className}`}>
        {children}
    </div>
  )
}
