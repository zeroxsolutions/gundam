import React from "react";

export interface AccordionContextType {}

export const AccordionContext =
  React.createContext<AccordionContextType | null>(null);
AccordionContext.displayName = "ReUI.AccordionContext";

export type AccordionContextProviderProps = {
  value: AccordionContextType | null;
  children?: React.ReactNode;
};

export const AccordionContextProvider: React.FC<
  AccordionContextProviderProps
> = ({ value, children }: AccordionContextProviderProps) => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

AccordionContextProvider.displayName = "ReUI.AccordionContextProvider";
