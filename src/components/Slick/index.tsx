import React from "react";

export interface SlickProps extends React.ComponentProps<"div"> {}

export const Slick = React.forwardRef<HTMLDivElement, SlickProps>(
  (props: SlickProps) => {
    return <div {...props}>{props.children}</div>;
  }
);

Slick.displayName = "ReUI.Slick";
