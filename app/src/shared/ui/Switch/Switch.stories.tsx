import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '.'

export default {
  title: 'shared/Switch',
  component: Switch,
  tags: ['autodocs'],

  argTypes: {},
} as Meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {},
}
