import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useState } from 'react'

import { TextField } from '@/components/text-field/text-field'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputPassword: Story = {
  args: {
    disabled: false,
    label: 'Click here',
    type: 'password',
    value: '',
  },
  render: () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }

    return <TextField onChange={onChange} type={'password'} value={value} />
  },
}

export const InputWithPlaceHolderAndSearch: Story = {
  args: {
    disabled: false,
    label: 'Click here',
    placeholder: 'Placeholder',
    searchInput: true,
    type: 'text',
    value: 'Simple input',
  },
  render: () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }
    const onClickClearInput = () => {
      setValue('')
    }

    return (
      <TextField
        onChange={onChange}
        onClickClearInput={onClickClearInput}
        searchInput
        value={value}
      />
    )
  },
}
