import React from 'react'

import { Button } from '@/components/button'
import { ControlledInput } from '@/components/controlled'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { LoginFormType, useLoginForm } from '@/components/form-form/use-login-form'

type Props = {
  onSubmitHandler: (data: LoginFormType) => void
}

export const LoginForm = React.memo(({ onSubmitHandler }: Props) => {
  const { control, handleSubmit } = useLoginForm()

  const onSubmit = handleSubmit(data => onSubmitHandler(data))

  return (
    <form onSubmit={onSubmit}>
      <ControlledInput control={control} label={'email'} name={'email'} />
      <ControlledInput control={control} label={'password'} name={'password'} />
      <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />

      <Button type={'submit'}>Submit</Button>
    </form>
  )
})
