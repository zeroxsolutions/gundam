import React from "react";

export interface AccordionHeaderProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export const AccordionHeader: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<AccordionHeaderProps> &
    React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  (
    props: AccordionHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactNode => {
    return (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    );
  }
);

AccordionHeader.displayName = "ReUI.AccordionHeader";
