import React from 'react'

import { Button } from '@/components/button'
import { ControlledSelect } from '@/components/controlled/controlled-select'
import {
  FormWithSelectType,
  useFormWithSelect,
} from '@/components/controlled/controlled-select/use-form-with-select'
import { Option } from '@/components/select'

import s from './form-with-select.module.scss'

const selectOptions: Option[] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Google', value: 'Google' },
  { label: 'Nokia', value: 'Nokia' },
]

type Props = {
  onSubmitHandler: (data: FormWithSelectType) => void
}

// const schema = z.object({
//   phone: z.string().trim().min(1, 'Choose favorite phone'),
// })

export const FormWithSelect = React.memo(({ onSubmitHandler }: Props) => {
  const { control, handleSubmit } = useFormWithSelect()

  // const { control, handleSubmit } = useForm<FormWithSelectType>({
  //   defaultValues: { phone: '' },
  //   mode: 'onChange',
  //   resolver: zodResolver(schema),
  // })

  return (
    <form onSubmit={handleSubmit(data => onSubmitHandler(data))}>
      <div>
        <ControlledSelect
          className={s.select}
          control={control}
          name={'phone'}
          options={selectOptions}
          placeholder={'Choose Phone'}
        />
      </div>
      <Button type={'submit'}>Submit</Button>
    </form>
  )
})
