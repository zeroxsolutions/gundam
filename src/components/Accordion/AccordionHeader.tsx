import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";

export interface AccordionHeaderProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export const AccordionHeader: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionHeaderProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, AccordionHeaderProps>(
  (
    props: AccordionHeaderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactNode => {
    return (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    );
  },
);

AccordionHeader.displayName = "ReUI.AccordionHeader";
