import React from "react";

export interface DatePickerProps extends React.ComponentProps<"div"> {}

export const DatePicker: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<DatePickerProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    props: DatePickerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactNode => {
    return (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    );
  }
);

DatePicker.displayName = "ReUI.DatePicker";
