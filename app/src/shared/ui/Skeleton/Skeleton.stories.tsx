import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '.'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],

  argTypes: {},
} as Meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {
    className: 'h-[125px] w-[250px] rounded-xl',
  },
}
