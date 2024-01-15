import { fetchMessage } from '@/lib/fetchMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Id, ToastOptions, toast } from 'react-toastify'
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
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(64, { message: 'Name cannot exceed 64 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(16, { message: 'Message must be at least 16 characters long' })
    .max(512, { message: 'Message cannot exceed 512 characters' })
})

type Contact = z.infer<typeof ContactSchema>

export const useContactForm = () => {
  const toastId = useRef<Id | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful }
  } = useForm<Contact>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: '', email: '', message: '' }
  })

  useEffect(() => {
    if (isSubmitting && isValid) {
      toastId.current = toast.info('Sending message', toastOptions)
    } else if (!isSubmitting && toastId.current) {
      toast.dismiss(toastId.current!)
      toastId.current = null
    }
  }, [isSubmitting, isValid])

  useEffect(() => {
    if (isSubmitSuccessful) {
      const dialog = document.getElementById(
        'contact-dialog'
      ) as HTMLDialogElement
      if (dialog !== null) dialog.close()
      toast.success('Message sent', toastOptions)
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const sendMail = fetchMessage.bind(null)
  const onSubmit = handleSubmit(async data => await sendMail(data))

  return {
    register,
    errors,
    isSubmitting,
    onSubmit
  }
}
