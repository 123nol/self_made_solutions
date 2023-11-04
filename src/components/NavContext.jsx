import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [order, setOrder] = useState(1);
  return (
    <NavContextProvider value={[order, setOrder]}>
      {children}
    </NavContextProvider>
  );
};
