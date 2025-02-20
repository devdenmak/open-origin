import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '.'

export default {
  title: 'shared/Dropdown',
  component: DropdownMenu,
  tags: ['autodocs'],

  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
    docs: {
      description: {
        component:
          '<a target="_blank" href="https://ui.shadcn.com/docs/components/dropdown-menu">https://ui.shadcn.com/docs/components/dropdown-menu</a>',
      },
    },
  },

  argTypes: {},
} as Meta

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownMenuTrigger asChild>
          <Button variant="default">Open</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>First</DropdownMenuItem>
          <DropdownMenuItem>Second</DropdownMenuItem>
          <DropdownMenuItem>Third</DropdownMenuItem>
        </DropdownMenuContent>
      </>
    ),
  },
}
