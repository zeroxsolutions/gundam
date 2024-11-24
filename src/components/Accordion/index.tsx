import {
  propTypesDisabled,
  propTypesIcon,
  propTypesOpen,
  type typeDisabled,
  type typeIcon,
  type typeOpen,
} from "../../types/components/accordion"
import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
  useMemo,
} from "react"
import { AccordionContextProvider, AccordionContextType } from "./AccordionContext"
import { defaultProps } from "../../default/components/accordion"
import { AccordionBody, AccordionBodyProps } from "./AccordionBody"
import { AccordionHeader, AccordionHeaderProps } from "./AccordionHeader"

export interface AccordionProps extends ComponentProps<"div"> {
  open?: typeOpen
  icon?: typeIcon
  disabled?: typeDisabled
}

export const Accordion: ForwardRefExoticComponent<PropsWithoutRef<AccordionProps> & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, AccordionProps>(
    ({ open, icon, disabled, ...restProps }: AccordionProps, ref: ForwardedRef<HTMLDivElement>): ReactNode => {
      // assign
      open = open ?? defaultProps.open
      icon = icon ?? defaultProps.icon
      disabled = disabled ?? defaultProps.disabled

      // context value
      const contextValue = useMemo<AccordionContextType>(() => {
        return { open, icon, disabled }
      }, [open, icon, disabled])

      return (
        <AccordionContextProvider value={contextValue}>
          <div {...restProps} ref={ref}>
            {restProps.children}
          </div>
        </AccordionContextProvider>
      )
    }
  )

Accordion.propTypes = {
  open: propTypesOpen,
  icon: propTypesIcon,
  disabled: propTypesDisabled,
}

Accordion.displayName = "Accordion"

export type { AccordionHeaderProps, AccordionBodyProps, AccordionContextType }
export { AccordionHeader, AccordionBody }

export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Body: AccordionBody,
})
