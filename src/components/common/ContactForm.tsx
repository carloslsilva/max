'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC, HTMLProps, ReactNode, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { twJoin } from 'tailwind-merge'
import * as z from 'zod'

const commonClasses = twJoin(
  'w-full rounded border border-primary-300 bg-primary-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700',
  'outline-none transition-colors duration-300 ease-in-out',
  'focus:border-ultra-violet-500 focus:bg-white focus:ring-2 focus:ring-ultra-violet-200'
)

const Container = ({ children }: { children: ReactNode }) => (
  <div className='flex flex-col gap-0.5'>{children}</div>
)

const Label = ({
  children,
  ...rest
}: Omit<HTMLProps<HTMLLabelElement>, 'className'>) => (
  <label className='text-sm leading-7 text-primary-600' {...rest}>
    {children}
  </label>
)

const ErrorText = ({ children }: { children: ReactNode }) => (
  <>{children && <p className='text-xs text-tomato-500'>{children}</p>}</>
)

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'className'> & {
  label: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Comp(
  { label, error, ...rest },
  ref
) {
  return (
    <Container>
      <Label htmlFor={rest.name}>{label}:</Label>
      <input className={commonClasses} ref={ref} id={rest.name} {...rest} />
      <ErrorText>{error}</ErrorText>
    </Container>
  )
})

type TextAreaProps = Omit<HTMLProps<HTMLTextAreaElement>, 'className'> & {
  label: string
  error?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function Comp(
  { label, error, ...rest },
  ref
) {
  return (
    <Container>
      <Label htmlFor={rest.name}>{label}:</Label>
      <textarea
        className={twJoin(commonClasses, 'h-32 resize-none')}
        ref={ref}
        id={rest.name}
        {...rest}
      />
      <ErrorText>{error}</ErrorText>
    </Container>
  )
})

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
      className='mx-auto flex max-w-md flex-col gap-4'
      onSubmit={handleSubmit(async data => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
      })}
    >
      <Input label='Name' error={errors.name?.message} {...register('name')} />
      <Input
        label='Email'
        error={errors.email?.message}
        {...register('email')}
      />
      <TextArea
        label='Message'
        error={errors.message?.message}
        {...register('message')}
      />

      <button
        className='rounded bg-ultra-violet-500 p-2 text-white hover:bg-ultra-violet-600 disabled:bg-ultra-violet-400'
        disabled={isSubmitting}
        type='submit'
      >
        Send
      </button>
    </form>
  )
}
