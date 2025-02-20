import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

export default {
  title: 'Widgets/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  argTypes: {},
} as Meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
}
