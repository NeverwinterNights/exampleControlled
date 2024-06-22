import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { ClosedInputIcon } from '@/assets/icons/CloseInputIcon'
import { Eye } from '@/assets/icons/Eye'
import { EyeClosed } from '@/assets/icons/EyeClosed'
import { SearchIcon } from '@/assets/icons/SearchIcon'
import { clsx } from 'clsx'

import styles from './text-field.module.scss'

import { Typography } from '../ui/typography'

// import { ClosedInputIcon } from '../../../assets/icons/CloseInputIcon.tsx'

export type InputPropsType = {
  disabled?: boolean
  error?: string
  inputTextClassName?: string
  label?: string
  onClickClearInput?: () => void
  searchInput?: boolean
  type?: string
  // onValueChange?: (value: string) => void
  width?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputPropsType>(
  (
    {
      className,
      disabled,
      error,
      inputTextClassName,
      label,
      onChange,
      onClickClearInput,
      placeholder,
      searchInput,
      type,
      value = '',
      width,
      ...restProps
    },
    ref
  ) => {
    const [iconVisible, setIconVisible] = useState(type)

    const classNames = {
      inpText: clsx(styles.input, inputTextClassName),
      input: clsx(styles.inputContainer, !!error && styles.error, className),
      label: clsx(styles.inputContainer, !!error && styles.error, className),
    }
    const iconClickHandler = (e: any) => {
      e.preventDefault()
      setIconVisible(() => (iconVisible === 'password' ? 'text' : 'password'))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      // onValueChange?.(e.target.value)
    }

    return (
      <div className={clsx(styles.main, disabled && styles.disabled)} style={{ width }}>
        {label && (
          <div>
            <Typography className={styles.label} variant={'body2'}>
              {label}
            </Typography>
          </div>
        )}
        <div className={classNames.input}>
          {searchInput && (
            <span
              className={styles.icon}
              style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
            >
              <SearchIcon />
            </span>
          )}
          <input
            className={classNames.inpText}
            disabled={disabled}
            onChange={handleChange}
            placeholder={placeholder}
            ref={ref}
            style={error ? { color: 'var( --color-danger-300 )' } : {}}
            type={iconVisible}
            value={value}
            {...restProps}
          />
          {searchInput && value.toString()?.length > 0 && (
            <span className={styles.closedImp} onClick={onClickClearInput}>
              <ClosedInputIcon />
            </span>
          )}

          {(type === 'password' || iconVisible === 'password') && (
            <button className={styles.fakebutton} disabled={disabled} onClick={iconClickHandler}>
              {iconVisible === 'password' ? (
                <Eye color={disabled ? 'var(--color-dark-100)' : ''} />
              ) : (
                <EyeClosed color={disabled ? 'var(--color-dark-100)' : ''} />
              )}
            </button>
          )}
        </div>

        {error && (
          <div className={styles.errorContainer}>
            <div style={{ margin: '4px 0' }}>
              <Typography style={{ color: 'var( --color-danger-300 )' }} variant={'caption'}>
                {error}
              </Typography>
            </div>
          </div>
        )}
      </div>
    )
  }
)
