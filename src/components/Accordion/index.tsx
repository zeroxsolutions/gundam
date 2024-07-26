import {
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

export interface AccordionProps extends React.ComponentProps<"div"> {
  open?: typeOpen;
  icon?: typeIcon;
  disabled?: typeDisabled;
}

export const Accordion: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<AccordionProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    { open, icon, disabled, ...props }: AccordionProps,
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
        <div {...props} ref={ref}>
          {props.children}
        </div>
      </AccordionContextProvider>
    );
  }
);

Accordion.propTypes = {
  open: propTypesOpen,
  icon: propTypesIcon,
};

Accordion.displayName = "ReUI.Accordion";

export * from "./AccordionContext";
export * from "./AccordionBody";
