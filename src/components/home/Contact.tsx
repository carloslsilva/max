import type { FC } from 'react'
import { ContactForm } from '../ContactForm'
import { Section, Text } from '../common'

export const Contact: FC = () => (
  <Section title='Contact'>
    <div className='mx-auto md:w-2/3 lg:w-1/2'>
      <Text>
        Do you have any thoughts or topics you&apos;d like to discuss?
      </Text>
      <Text className='mb-4'>
        Whether it&apos;s work-related or just a casual conversation, I&apos;m
        available to chat. Feel free to contact me anytime.
      </Text>
      <ContactForm />
    </div>
  </Section>
)
