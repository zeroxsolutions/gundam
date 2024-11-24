import type { typeDisabled, typeIcon, typeOpen } from "../../types/components/accordion"
import React, { Context, createContext, FC, ReactNode, useContext } from "react"

export interface AccordionContextType {
  open?: typeOpen
  icon?: typeIcon
  disabled?: typeDisabled
}

export const AccordionContext: Context<AccordionContextType | null> = createContext<AccordionContextType | null>(null)
AccordionContext.displayName = "AccordionContext"

export type AccordionContextProviderProps = {
  value: AccordionContextType | null
  children: ReactNode
}

export function useAccordion(): AccordionContextType {
  const context = useContext<AccordionContextType | null>(AccordionContext)
  if (!context) {
    throw new Error("useAccordion() error")
  }
  return context
}

export const AccordionContextProvider: FC<AccordionContextProviderProps> = ({
  value,
  children,
}: AccordionContextProviderProps): ReactNode => {
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>
}

AccordionContextProvider.displayName = "AccordionContextProvider"
