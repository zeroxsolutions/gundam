import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react"

export interface ButtonProps extends ComponentProps<"button"> {}

export const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): ReactNode => {
    return (
      <button ref={ref} {...restProps}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
