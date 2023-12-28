'use client'

import { fetchMessage } from '@/lib/fetchMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Id, ToastOptions, toast } from 'react-toastify'
import { twJoin } from 'tailwind-merge'

import { z } from 'zod'

const toastOptions: ToastOptions = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: 'light'
}

const ContactSchema = z.object({
  name: z.string().min(2).max(64),
  email: z.string().email(),
  message: z.string().min(16).max(512)
})

type Contact = z.infer<typeof ContactSchema>

export const ContactForm: FC = () => {
  const toastId = useRef<Id | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<Contact>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: '', email: '', message: '' }
  })

  useEffect(() => {
    if (isSubmitting) {
      toastId.current = toast.info('Sending message', toastOptions)
    } else {
      toast.dismiss(toastId.current!)
    }
  }, [isSubmitting])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      toast.success('Message sent', toastOptions)
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleSubmit(async data => await fetchMessage(data))}
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
          <p className='text-xs text-tomato-500'>
            {errors.name?.message.replace(/String/g, 'Name')}
          </p>
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
          <p className='text-xs text-tomato-500'>
            {errors.message?.message.replace(/String/g, 'Message')}
          </p>
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
