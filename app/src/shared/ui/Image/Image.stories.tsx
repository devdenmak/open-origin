import type { Meta, StoryObj } from '@storybook/react'

import ImageFancy from '../../images/fancy.svg'
import { Image } from '.'

export default {
  title: 'shared/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: ImageFancy.src,
    sizes: '1378px',
    width: 1378,
    height: 615,
    alt: 'Fancy',
    loader: 'next',
    quality: 100,
    priority: false,
    fillParent: true,
    unoptimized: false,
    className: 'some-custom-class',
    loading: false,
  },
  argTypes: {},
} as Meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: null,
    },
  },
  args: {},
}
