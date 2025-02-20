import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'shared/Logo',
  component: Logo,
  tags: ['autodocs'],

  argTypes: {},
} as Meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {},
}
