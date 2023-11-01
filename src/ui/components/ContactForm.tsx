'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { twJoin } from 'tailwind-merge'
import * as z from 'zod'

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
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<contactValues>({
    resolver: zodResolver(contactValuesSchema),
    defaultValues: { name: '', email: '', message: '' }
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      toast.success('Message sent', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleSubmit(async ({ name, email, message }) => {
        await fetch('/api/email', {
          method: 'POST',
          body: JSON.stringify({ name, email, message })
        })
      })}
    >
      <div className='flex flex-col gap-0.5'>
        <label className='text-sm leading-7 text-primary-600' htmlFor='name'>
          Name:
        </label>
        <input
          className={twJoin(
            'w-full rounded border border-primary-300 bg-primary-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700',
            'outline-none transition-colors duration-300 ease-in-out',
            'focus:border-ultra-violet focus:bg-white focus:ring-2 focus:ring-ultra-violet-200'
          )}
          autoComplete='false'
          id='name'
          {...register('name')}
        />
        {errors.name?.message && (
          <p className='text-xs text-tomato-500'>{errors.name?.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-0.5'>
        <label className='text-sm leading-7 text-primary-600' htmlFor='email'>
          Email:
        </label>
        <input
          className={twJoin(
            'w-full rounded border border-primary-300 bg-primary-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700',
            'outline-none transition-colors duration-300 ease-in-out',
            'focus:border-ultra-violet focus:bg-white focus:ring-2 focus:ring-ultra-violet-200'
          )}
          autoComplete='false'
          id='email'
          {...register('email')}
        />
        {errors.email?.message && (
          <p className='text-xs text-tomato-500'>{errors.email?.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-0.5'>
        <label className='text-sm leading-7 text-primary-600' htmlFor='message'>
          Message:
        </label>
        <textarea
          className={twJoin(
            'w-full rounded border border-primary-300 bg-primary-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700',
            'outline-none transition-colors duration-300 ease-in-out',
            'focus:border-ultra-violet focus:bg-white focus:ring-2 focus:ring-ultra-violet-200',
            'h-32 resize-none'
          )}
          id='message'
          {...register('message')}
        />
        {errors.message?.message && (
          <p className='text-xs text-tomato-500'>{errors.message?.message}</p>
        )}
      </div>
      <button
        className='rounded bg-ultra-violet p-2 text-white hover:bg-ultra-violet-600 disabled:bg-ultra-violet-400'
        type='submit'
        disabled={isSubmitting}
      >
        Send
      </button>
    </form>
  )
}
