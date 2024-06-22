import { Check } from '@/assets/icons/Check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import styles from './checkbox.module.scss'

import { Typography } from '../ui/typography'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}

export const CheckboxItem = ({
  checked,
  className,
  disabled,
  errorMessage,
  id,
  label,
  onChange,
  position,
  required,
}: CheckboxProps) => {
  const classNames = {
    buttonWrapper: clsx(
      styles.buttonWrapper,
      disabled && styles.disabled,
      position === 'left' && styles.left
    ),
    container: clsx(styles.container, className),
    indicator: styles.indicator,
    label: clsx(styles.label, disabled && styles.disabled),
    root: styles.root,
  }

  return (
    <>
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography as={'label'} className={styles.wrap} variant={'body2'}>
            <div className={classNames.buttonWrapper}>
              <CheckboxRadix.Root
                checked={checked}
                className={classNames.root}
                disabled={disabled}
                id={id}
                onCheckedChange={onChange}
                required={required}
              >
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                    <Check disabled={disabled ? disabled : false} />
                  </CheckboxRadix.Indicator>
                )}
              </CheckboxRadix.Root>
            </div>
            {label}
          </Typography>
        </LabelRadix.Root>
      </div>
      {errorMessage && (
        <Typography className={styles.errorMessage} variant={'body2'}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}
