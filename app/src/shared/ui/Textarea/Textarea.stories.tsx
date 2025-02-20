import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '.'
import { sizes } from './Textarea.variants'

export default {
  title: 'shared/Textarea',
  component: Textarea,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(sizes).map((size) => size),
    },
  },
  args: {
    placeholder: 'Find out more',
    disabled: false,
    size: 'default',
  },
} as Meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {},
}
