'use client'

import { FC } from 'react'
import { ContactForm } from './ContactForm'
import { SocialLinks } from './common'
import { Icon } from './common/Icon'

export const ContactButton: FC = () => (
  <>
    <button
      className='inline-flex rounded border-0 bg-ultra-violet-500 px-6 py-2 text-lg text-white hover:bg-ultra-violet-600 focus:outline-none'
      onClick={() =>
        (
          document.getElementById('contact-dialog') as HTMLDialogElement
        ).showModal()
      }
    >
      Contact
    </button>
    <dialog
      className='relative h-[580px] w-[480px] rounded-xl p-8 drop-shadow-2xl'
      id='contact-dialog'
    >
      <form method='dialog'>
        <button className='absolute right-0 top-0 rounded-bl bg-ultra-violet-500 px-3 py-2 text-xs tracking-widest text-white'>
          <div className='flex h-3 w-3 flex-row items-center justify-center'>
            <Icon name='close' />
          </div>
        </button>
      </form>
      <div className='flex h-full w-full flex-col justify-between'>
        <ContactForm />
        <SocialLinks />
      </div>
    </dialog>
  </>
)
