import React from "react";

export interface ViewPagerProps extends React.ComponentProps<"div"> {}

export interface ViewPagerRef extends HTMLDivElement {
  next: () => void;
}

export const ViewPager: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ViewPagerProps> & React.RefAttributes<ViewPagerRef>
> = React.forwardRef<ViewPagerRef, ViewPagerProps>(
  (
    props: ViewPagerProps,
    ref: React.ForwardedRef<ViewPagerRef>
  ): React.ReactNode => {
    const divRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => {
      return {
        ...(divRef.current as HTMLDivElement),
        next() {},
      };
    }, []);

    return (
      <div {...props} ref={divRef}>
        {props.children}
      </div>
    );
  }
);
ViewPager.displayName = "HE.ViewPager";
