'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC, ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const ErrorText = ({ children }: { children: ReactNode }) => (
  <>{children && <p className='text-xs text-tomato-500'>{children}</p>}</>
)

const contactValuesSchema = z.object({
  name: z.string().min(2).max(64),
  email: z.string().email(),
  message: z.string().min(16).max(512)
})

type contactValues = z.infer<typeof contactValuesSchema>

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<contactValues>({
    resolver: zodResolver(contactValuesSchema)
  })

  return (
    <form
      className='mx-auto max-w-md'
      onSubmit={handleSubmit(async data => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
      })}
    >
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-600'>
          Name:
        </label>
        <input
          className='w-full rounded border border-gray-300 p-2'
          type='text'
          autoComplete='false'
          {...register('name')}
          id='name'
        />
        <ErrorText>{errors.name?.message}</ErrorText>
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-600'>
          Email:
        </label>
        <input
          className='w-full rounded border border-gray-300 p-2'
          type='text'
          autoComplete='false'
          {...register('email')}
          id='email'
        />
        <ErrorText>{errors.message?.message}</ErrorText>
      </div>

      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-600'>
          Message:
        </label>
        <textarea
          className='w-full rounded border border-gray-300 p-2'
          {...register('message')}
          id='message'
        />
        <ErrorText>{errors.message?.message}</ErrorText>
      </div>

      <button
        className='rounded bg-blue-500 p-2 text-white disabled:bg-blue-200'
        disabled={isSubmitting}
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}
