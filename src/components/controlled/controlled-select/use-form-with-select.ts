import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
// пишется каждый раз заново
const schema = z.object({
  description: z
    .string()
    .trim()
    .min(1, { message: 'Enter description' })
    // .nonempty('Enter description')
    .min(10, 'Description must be at least 4 characters'),
  name: z.string().trim().min(1, { message: 'Enter your name' }),
  sure: z.boolean().refine(value => value, {
    message: 'Поле должно быть обязательно отмечено',
  }),
})

export type FormWithTextAreaType = z.infer<typeof schema>
export const useFormWithTextArea = () => {
  return useForm<FormWithTextAreaType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
}
