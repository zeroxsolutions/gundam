import { AccordionBody } from "../components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AccordionBody> = {
  component: AccordionBody,
}

export default meta

type Story = StoryObj<typeof AccordionBody>

export const Default: Story = {
  args: {},
}
