import type { Meta, StoryObj } from '@storybook/react'

import { Title } from '.'
import { sizes } from './Title.variants'

export default {
  title: 'shared/Title',
  component: Title,
  tags: ['autodocs'],

  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },

  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(sizes).map((size) => size),
    },
  },

  args: {
    children: 'We develop web and mobile',
    tag: 'h2',
    size: 'default',
  },
} as Meta

type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {},
}
