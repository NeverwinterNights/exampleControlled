import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['large', 'body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'link1', 'link2'],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Large Checkbox',
    variant: 'large',
  },
}

export const Body1: Story = {
  args: {
    children: 'Body1',
    disabled: false,
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Body2 Checkbox',
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Subtitle1 Checkbox',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Subtitle2 Checkbox',
    variant: 'subtitle2',
  },
}

export const Overline: Story = {
  args: {
    children: 'Overline Checkbox',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    children: 'Link1 Checkbox',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Link2 Checkbox',
    variant: 'link2',
  },
}

export const AsH1: Story = {
  args: {
    as: 'h1',
    children: 'Looks like a H1',
  },
}
export const AsH2: Story = {
  args: {
    as: 'h2',
    children: 'Looks like a H2',
  },
}
export const AsH3: Story = {
  args: {
    as: 'h3',
    children: 'Looks like a H3',
  },
}
export const AsP: Story = {
  args: {
    as: 'p',
    children: 'Looks like a paragraph',
  },
}
