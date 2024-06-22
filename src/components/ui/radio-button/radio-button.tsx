import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { RadioItem } from '@/components/radio-button/radio-item/radio-item'
import * as RadioGroup from '@radix-ui/react-radio-group'

type Options = {
  title: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  options: Options[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const RadioButton = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioGroupProps>(
  ({ className, defaultValue, onValueChange, options, value }, ref) => {
    const buttons = options.map(el => (
      <RadioItem id={el.value} key={el.title} title={el.title} value={el.value} />
    ))

    return (
      <RadioGroup.Root
        className={className}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
      >
        {buttons}
      </RadioGroup.Root>
    )
  }
)
