import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckboxItem, CheckboxProps } from '../ui/checkbox'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'defaultValues' | 'rules'> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  className,
  control,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    shouldUnregister,
  })

  const handleChange = onChange as (value: boolean) => void

  return (
    <CheckboxItem
      checked={value}
      className={className}
      errorMessage={error?.message}
      onChange={handleChange}
      {...rest}
    />
  )
}
