"use client";

import { createContext } from "react";
export const RehabilitationContext = createContext({});

const RehabilitationProvider = ({ children, data }) => {
  const values = {
    // Add any state or functions you want to provide to the context here
  };

  return (
    <RehabilitationContext.Provider value={data}>
      {children}
    </RehabilitationContext.Provider>
  );
};

export default RehabilitationProvider;
