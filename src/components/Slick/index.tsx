import React, {
  ForwardedRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react"

export interface SlickProps extends React.ComponentProps<"div"> {}

export const Slick: ForwardRefExoticComponent<
  PropsWithoutRef<SlickProps> & RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, SlickProps>(
  (props: SlickProps, ref: ForwardedRef<HTMLDivElement>): ReactNode => {
    return (
      <div ref={ref} {...props}>
        {props.children}
      </div>
    )
  }
)

Slick.displayName = "Slick"
