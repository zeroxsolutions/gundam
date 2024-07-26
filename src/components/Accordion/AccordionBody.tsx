import React from "react";

export interface AccordionBodyProps extends React.ComponentProps<"div"> {}

export const AccordionBody: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<AccordionBodyProps> &
    React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, AccordionBodyProps>(
  (
    props: AccordionBodyProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactNode => {
    return (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    );
  }
);

AccordionBody.displayName = "ReUI.AccordionBody";
