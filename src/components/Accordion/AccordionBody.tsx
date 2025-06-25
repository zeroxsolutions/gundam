import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react"

export interface AccordionBodyProps extends ComponentProps<"div"> {}

export const AccordionBody: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionBodyProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (props: AccordionBodyProps, ref: ForwardedRef<HTMLDivElement>): ReactNode => {
    return (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    )
  }
)

AccordionBody.displayName = "AccordionBody"
