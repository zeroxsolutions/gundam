import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";

export interface InputDatePickerProps extends ComponentProps<"input"> {}

export const InputDatePicker: ForwardRefExoticComponent<
  PropsWithoutRef<InputDatePickerProps> & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, InputDatePickerProps>(
  (
    props: InputDatePickerProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactNode => {
    return <input {...props} type="text" ref={ref} />;
  },
);

InputDatePicker.displayName = "InputDatePicker";
