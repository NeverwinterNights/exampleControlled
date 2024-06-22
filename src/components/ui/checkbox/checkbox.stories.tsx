import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckboxItem } from './'

const meta = {
  argTypes: {
    label: [''],
  },
  component: CheckboxItem,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: { label: 'Click me' },
}
export const CheckboxControlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState(true)
    const onChange = (value: boolean) => {
      setValue(value)
    }

    return <CheckboxItem checked={value} onChange={onChange} />
  },
}
