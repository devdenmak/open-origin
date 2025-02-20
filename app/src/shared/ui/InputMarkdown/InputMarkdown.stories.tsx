import type { Meta, StoryObj } from '@storybook/react'

import { InputMarkdown } from '.'

export default {
  title: 'shared/InputMarkdown',
  component: InputMarkdown,
  tags: ['autodocs'],

  argTypes: {},
} as Meta

type Story = StoryObj<typeof InputMarkdown>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {},
}
