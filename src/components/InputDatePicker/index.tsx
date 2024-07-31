import React from "react";

export interface InputDatePickerProps extends React.ComponentProps<"input"> {}

export const InputDatePicker: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<InputDatePickerProps> &
    React.RefAttributes<HTMLInputElement>
> = React.forwardRef<HTMLInputElement, InputDatePickerProps>(
  (
    props: InputDatePickerProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): React.ReactNode => {
    return <input {...props} type="text" ref={ref} />;
  }
);

InputDatePicker.displayName = "HE.InputDatePicker";
