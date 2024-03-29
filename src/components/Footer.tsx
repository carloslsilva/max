import type { FC } from 'react'
import { Container, SocialLinks } from './common'

export const Footer: FC = () => (
  <Container
    className='mt-10 flex flex-col items-center gap-3 border-t-2 border-primary-100 py-8 sm:flex-row sm:py-16'
    as='footer'
  >
    <a className='flex items-center justify-center font-title font-medium text-primary-900 md:justify-start'>
      <span className='text-xl'>CS</span>
    </a>
    <p className='text-sm text-primary-500 sm:ml-4 sm:border-l-2 sm:border-gray-200 sm:pl-4'>
      <a
        className='ml-1 font-semibold text-primary-900'
        href='https://twitter.com/carloslsilva'
        rel='noopener noreferrer'
        target='_blank'
      >
        @carloslsilva
      </a>
    </p>
    <SocialLinks className='sm:ml-auto' />
  </Container>
)
