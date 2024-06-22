import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from '../radio-button.module.scss'

import { Typography } from '../../ui/typography'

type RadioItemProps = {
  title: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

export const RadioItem = forwardRef<ElementRef<typeof RadioGroup.Item>, RadioItemProps>(
  ({ className, id, title, value }, ref) => {
    const classNames = {
      indicator: clsx(s.indicator),
      item: clsx(s.item, className),
    }

    return (
      <div className={s.container}>
        <RadioGroup.Item className={classNames.item} id={id} ref={ref} value={value}>
          <RadioGroup.Indicator className={classNames.indicator} />
        </RadioGroup.Item>
        <Typography as={'label'} className={s.label} htmlFor={id} variant={'body1'}>
          {title}
        </Typography>
      </div>
    )
  }
)
