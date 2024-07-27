import type {
  typeDisabled,
  typeIcon,
  typeOpen,
} from "@/types/components/accordion";
import React from "react";

export interface AccordionContextType {
  open?: typeOpen;
  icon?: typeIcon;
  disabled?: typeDisabled;
}

export const AccordionContext =
  React.createContext<AccordionContextType | null>(null);
AccordionContext.displayName = "ReUI.AccordionContext";

export type AccordionContextProviderProps = {
  value: AccordionContextType | null;
  children: React.ReactNode;
};

export function useAccordion(): AccordionContextType {
  const context = React.useContext<AccordionContextType | null>(
    AccordionContext
  );
  if (!context) {
    throw new Error("useAccordion() error");
  }
  return context;
}

export const AccordionContextProvider: React.FC<
  AccordionContextProviderProps
> = ({ value, children }: AccordionContextProviderProps): React.ReactNode => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

AccordionContextProvider.displayName = "ReUI.AccordionContextProvider";
