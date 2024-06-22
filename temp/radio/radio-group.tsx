import { Typography } from '@/components/typography'
import * as Radio from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Option = {
  label: string
  value: string
}

export type RadioGroupType = {
  ariaLabel?: string
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  name?: string
  onValueChange: (value: string) => void
  options: Option[]
  value?: string
}

export const RadioGroup = ({ disabled, errorMessage, options, ...rest }: RadioGroupType) => {
  return (
    <Radio.Root className={s.root} {...rest} disabled={disabled}>
      {options.map(option => (
        <Radio.Item
          className={s.RadioGroupItem}
          disabled={disabled}
          key={option.value}
          value={option.value}
        >
          <div className={s.RadioGroupIndicator} />
          <Typography as={'label'} className={s.label} variant={'body2'}>
            {option.label}
          </Typography>
        </Radio.Item>
      ))}
      {errorMessage && (
        <Typography className={s.error} variant={'error'}>
          {errorMessage}
        </Typography>
      )}
    </Radio.Root>
  )
}
