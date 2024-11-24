import { InputDatePicker } from "../../components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof InputDatePicker> = {
  component: InputDatePicker,
}

export default meta

type Story = StoryObj<typeof InputDatePicker>

export const Default: Story = {
  args: {},
}
