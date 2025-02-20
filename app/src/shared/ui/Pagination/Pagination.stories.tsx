import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Pagination as PaginationComponent } from '.'

export default {
  title: 'shared/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  argTypes: {},
  docs: {
    story: {
      inline: false,
      iframeHeight: 600,
    },
  },
} as Meta

type Story = StoryObj<typeof PaginationComponent>

const Pagination = ({ ...args }) => {
  const [value, setValue] = useState(2)

  return <PaginationComponent {...args} currentPage={value} onChange={setValue} />
}

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  render: ({ ...args }) => (
    <div style={{ padding: '20px' }}>
      <Pagination {...args} />
    </div>
  ),
  args: {
    currentPage: 2,
    lastPage: 10,
    className: 'some-custom-class',
  },
}
