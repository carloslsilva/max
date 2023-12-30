import { FC } from 'react'

export const ResumeButton: FC = () => {
  return (
    <a
      className='inline-flex rounded border-0 bg-primary-100 px-6 py-2 text-lg text-primary-700 hover:bg-primary-200 focus:outline-none'
      href={'/resume.pdf'}
      rel='noopener noreferrer'
      target='_blank'
    >
      Resume
    </a>
  )
}
