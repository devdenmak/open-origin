import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@/src/shared/ui/Icon'

import { Button } from '.'
import { sizes, variants } from './Button.variants'

const SampleText = 'Find out more'

export default {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],

  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
    docs: {
      description: {
        component:
          '<a target="_blank" href="https://ui.shadcn.com/docs/components/button">https://ui.shadcn.com/docs/components/button</a>',
      },
    },
  },

  args: {
    children: SampleText,
    asChild: false,
    size: 'default',
    variant: 'default',
    disabled: false,
    loading: false,
    type: 'button',
  },

  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(sizes).map((size) => size),
    },
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants).map((variant) => variant),
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Third: Story = {
  args: {
    variant: 'third',
  },
}

export const Fourth: Story = {
  args: {
    variant: 'fourth',
  },
}

export const AsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://dev.family" target="_blank">
        {SampleText}
      </a>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Icon name="filled/lock" className="mr-2" />
        Find out more
        <Icon name="outlined/chevron-right" className="ml-2"></Icon>
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const LoadingCustom: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Icon name="outlined/refresh" className="mr-2 animate-spin" />
        Loading
      </>
    ),
  },
}
