import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'
import { Input } from '.'
import { sizes } from './Input.variants'

export default {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],

  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
    docs: {
      description: {
        component:
          '<a target="_blank" href="https://ui.shadcn.com/docs/components/input">https://ui.shadcn.com/docs/components/input</a>',
      },
    },
  },

  argTypes: {
    inputSize: {
      control: { type: 'select' },
      options: Object.keys(sizes).map((size) => size),
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
  },

  args: {
    placeholder: 'Find out more',
    disabled: false,
    inputSize: 'default',
    type: 'text',
  },
} as Meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  render: ({ ...args }) => (
    <div className="space-y-2">
      <Label className="px-3" htmlFor="email">
        Email
      </Label>
      <Input {...args} type="email" id="email" placeholder="Email" />
    </div>
  ),
  args: {
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
}
