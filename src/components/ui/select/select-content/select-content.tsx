import { memo } from 'react'

import { Option } from '@/components/select'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '../select.module.scss'

import { Typography } from '../../ui/typography'

type Props = {
  options: Option[]
  variant?: 'pagination' | 'primary'
}

export const SelectContent = memo(({ options, variant = 'primary' }: Props) => {
  const classNames = {
    content: clsx(s.content, s[variant]),
    item: clsx(s.item, s[variant]),
  }

  return (
    <SelectRadix.Content className={classNames.content} position={'popper'}>
      <SelectRadix.Viewport>
        {options.map(option => (
          <SelectRadix.Item className={classNames.item} key={option.value} value={option.value}>
            <SelectRadix.ItemText>
              <Typography as={'span'} className={s.active}>
                {option.label}
              </Typography>
            </SelectRadix.ItemText>
          </SelectRadix.Item>
        ))}
      </SelectRadix.Viewport>
    </SelectRadix.Content>
  )
})
