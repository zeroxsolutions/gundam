import { typeDisabled, typeIcon, typeIsChild, typeSize, typeVariant, } from "../../types/components/button"

export const defaultProps: {
  variant?: typeVariant
  size?: typeSize
  icon?: typeIcon
  disabled?: typeDisabled
  isChild?: typeIsChild
} = {
  variant: "primary",
  size: "md",
  icon: undefined,
  disabled: false,
  isChild: false,
}
