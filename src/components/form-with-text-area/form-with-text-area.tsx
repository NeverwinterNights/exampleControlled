import React from 'react'

import { ControlledInput } from '@/components/controlled'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { ControlledTextArea } from '@/components/controlled/controlled-text-area'

export const FormWithTextArea = React.memo(() => {
  return (
    <>
      <ControlledTextArea control={} name={} />
      <ControlledInput control={} name={} />
      <ControlledCheckbox name={} />
    </>
  )
})
