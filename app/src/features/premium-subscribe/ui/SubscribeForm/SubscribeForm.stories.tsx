import type { Meta, StoryObj } from '@storybook/react'

import { SubscribeForm } from '.'

export default {
  title: 'shared/SubscribeForm',
  component: SubscribeForm,
  tags: ['autodocs'],

  argTypes: {},
} as Meta

type Story = StoryObj<typeof SubscribeForm>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {},
}
