import { FC } from 'react'
import { Container, Icon } from './common'

type Props = {}
export const Footer: FC<Props> = () => (
  <Container
    className='mt-10 flex flex-col items-center border border-t-2 border-primary-100 px-5 py-8 sm:flex-row'
    as='footer'
  >
    <a className='flex items-center justify-center font-title font-medium text-primary-900 md:justify-start'>
      <span className='ml-3 text-xl'>CS</span>
    </a>
    <p className='mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4'>
      © 2023 Carlos Silva —
      <a
        className='ml-1 text-primary-600'
        href='https://twitter.com/carloslsilva'
        rel='noopener noreferrer'
        target='_blank'
      >
        @carloslsilva
      </a>
    </p>
    <span className='flex flex-row items-center justify-center gap-3 sm:ml-auto sm:mt-0 sm:justify-start'>
      <a
        href='https://github.com/carloslsilva'
        rel='noopener noreferrer'
        target='_blank'
        className='flex h-5 w-5 flex-row items-center justify-center text-primary-500 duration-300 ease-in-out hover:scale-105 hover:text-primary-900'
      >
        <Icon name='github' />
      </a>

      <a
        href='https://www.linkedin.com/in/carloslsilva/'
        rel='noopener noreferrer'
        target='_blank'
        className='flex h-5 w-5 flex-row items-center justify-center text-primary-500 duration-300 ease-in-out hover:scale-105 hover:text-primary-900'
      >
        <Icon name='linkedin' />
      </a>

      <a
        href='https://twitter.com/carloslsilva'
        rel='noopener noreferrer'
        target='_blank'
        className='flex h-5 w-5 flex-row items-center justify-center text-primary-500 duration-300 ease-in-out hover:scale-105 hover:text-primary-900'
      >
        <Icon name='twitter' />
      </a>
    </span>
  </Container>
)
