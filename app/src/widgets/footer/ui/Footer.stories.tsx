import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Widgets/Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  argTypes: {},
} as Meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {},
}
