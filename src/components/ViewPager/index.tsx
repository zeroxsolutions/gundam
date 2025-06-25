import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from "react"

export interface ViewPagerProps extends ComponentProps<"div"> {}

export interface ViewPagerRef extends HTMLDivElement {
  next: () => void
}

export const ViewPager: ForwardRefExoticComponent<
  PropsWithoutRef<ViewPagerProps> & RefAttributes<ViewPagerRef>
> = forwardRef<ViewPagerRef, ViewPagerProps>(
  (props: ViewPagerProps, ref: ForwardedRef<ViewPagerRef>): ReactNode => {
    const divRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => {
      return {
        ...(divRef.current as HTMLDivElement),
        next() {},
      }
    }, [])

    return (
      <div {...props} ref={divRef}>
        {props.children}
      </div>
    )
  }
)
ViewPager.displayName = "ViewPager"
