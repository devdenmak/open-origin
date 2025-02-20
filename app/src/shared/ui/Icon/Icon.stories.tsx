import type { Meta, StoryObj } from '@storybook/react'

import { getAllIconsNames } from '@/src/app/icons'

import { Icon } from '.'

export default {
  title: 'shared/Icon',
  component: Icon,
  tags: ['autodocs'],

  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },

  argTypes: {
    name: {
      control: { type: 'select' },
      options: getAllIconsNames(),
    },
  },
} as Meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: getAllIconsNames()[0],
  },
}
