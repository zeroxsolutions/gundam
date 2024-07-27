import {
  propTypesDisabled,
  propTypesIcon,
  propTypesOpen,
  type typeDisabled,
  type typeIcon,
  type typeOpen,
} from "@/types/components/accordion";
import React from "react";
import {
  AccordionContextProvider,
  AccordionContextType,
} from "./AccordionContext";
import { defaultProps } from "@/default/components/accordion";
import { AccordionBody, AccordionBodyProps } from "./AccordionBody";
import { AccordionHeader, AccordionHeaderProps } from "./AccordionHeader";

export interface AccordionProps extends React.ComponentProps<"div"> {
  open?: typeOpen;
  icon?: typeIcon;
  disabled?: typeDisabled;
}

export const Accordion: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<AccordionProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    { open, icon, disabled, ...restProps }: AccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactNode => {
    // assign
    open = open ?? defaultProps.open;
    icon = icon ?? defaultProps.icon;
    disabled = disabled ?? defaultProps.disabled;

    // context value
    const contextValue = React.useMemo<AccordionContextType>(() => {
      return { open, icon, disabled };
    }, [open, icon, disabled]);

    return (
      <AccordionContextProvider value={contextValue}>
        <div {...restProps} ref={ref}>
          {restProps.children}
        </div>
      </AccordionContextProvider>
    );
  }
);

Accordion.propTypes = {
  open: propTypesOpen,
  icon: propTypesIcon,
  disabled: propTypesDisabled,
};

Accordion.displayName = "ReUI.Accordion";

export type { AccordionHeaderProps, AccordionBodyProps, AccordionContextType };
export { AccordionHeader, AccordionBody };

export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Body: AccordionBody,
});
