import { Accordion } from "../components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {},
}
