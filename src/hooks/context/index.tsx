import React, { createContext } from 'react';

interface Props {
    children: string
}

export const Context = createContext(null); 

const GlobalState = (
    { children }: Props
) => {
  return <Context.Provider
  > { children } </Context.Provider>
}

export default GlobalState;