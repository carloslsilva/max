'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC, HTMLProps, ReactNode, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { twJoin } from 'tailwind-merge'
import * as z from 'zod'

/**
 * Inputs related
 */
type InputContainerProps = {
  children: ReactNode
}

const InputContainer: FC<InputContainerProps> = ({ children }) => (
  <div className='flex flex-col gap-0.5'>{children}</div>
)

type InputLabelProps = Omit<HTMLProps<HTMLLabelElement>, 'className'>

const InputLabel: FC<InputLabelProps> = ({ children, ...rest }) => (
  <label className='text-sm leading-7 text-primary-600' {...rest}>
    {children}
  </label>
)

type InputErrorProps = { children: ReactNode }

export const InputError: FC<InputErrorProps> = ({ children }) => (
  <>{children && <p className='text-xs text-tomato-500'>{children}</p>}</>
)

const commonClasses = twJoin(
  'w-full rounded border border-primary-300 bg-primary-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700',
  'outline-none transition-colors duration-300 ease-in-out',
  'focus:border-ultra-violet-500 focus:bg-white focus:ring-2 focus:ring-ultra-violet-200'
)

/**
 * Form components related
 */
type InputTextProps = Omit<HTMLProps<HTMLInputElement>, 'className'> & {
  label: string
  error?: string
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(function Comp(
  { label, error, ...rest },
  ref
) {
  return (
    <InputContainer>
      <InputLabel htmlFor={rest.name}>{label}:</InputLabel>
      <input className={commonClasses} ref={ref} id={rest.name} {...rest} />
      <InputError>{error}</InputError>
    </InputContainer>
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
    <InputContainer>
      <InputLabel htmlFor={rest.name}>{label}:</InputLabel>
      <textarea
        className={twJoin(commonClasses, 'h-32 resize-none')}
        ref={ref}
        id={rest.name}
        {...rest}
      />
      <InputError>{error}</InputError>
    </InputContainer>
  )
})

type ButtonSubmitProps = Omit<
  HTMLProps<HTMLButtonElement>,
  'className' | 'type'
>

const SubmitButton: FC<ButtonSubmitProps> = () => (
  <button
    className='rounded bg-ultra-violet-500 p-2 text-white hover:bg-ultra-violet-600 disabled:bg-ultra-violet-400'
    type='submit'
  >
    Send
  </button>
)

type FormProps = Omit<HTMLProps<HTMLFormElement>, 'className'>

const Form: FC<FormProps> = ({ children, ...rest }) => (
  <form className='flex flex-col gap-4' {...rest}>
    {children}
  </form>
)

/**
 * Export Component
 */
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
    <Form
      onSubmit={handleSubmit(async data => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
      })}
    >
      <InputText
        label='Name'
        error={errors.name?.message}
        {...register('name')}
      />
      <InputText
        label='Email'
        error={errors.email?.message}
        {...register('email')}
      />
      <TextArea
        label='Message'
        error={errors.message?.message}
        {...register('message')}
      />
      <SubmitButton disabled={isSubmitting}>Send</SubmitButton>
    </Form>
  )
}
