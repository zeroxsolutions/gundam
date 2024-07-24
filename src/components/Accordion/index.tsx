import React from "react";

export interface AccordionProps extends React.ComponentProps<"div"> {}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props: AccordionProps) => {
    return <div {...props}>{props.children}</div>;
  }
);

Accordion.displayName = "ReUI.Accordion";

export * from "./AccordionContext";
