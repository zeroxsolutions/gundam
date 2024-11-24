import {
  typeDisabled,
  typeIcon,
  typeOpen,
} from "../../types/components/accordion"

export const defaultProps: {
  open?: typeOpen
  icon?: typeIcon
  disabled?: typeDisabled
} = {
  open: false,
  icon: undefined,
  disabled: false,
}
