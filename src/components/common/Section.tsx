import { FC, ReactNode } from 'react'
import { Title } from './Title'

interface Props {
  title?: string
  children: ReactNode
}

export const Section: FC<Props> = ({ title, children }) => (
  <section className='flex flex-col'>
    {title && <Title className='mb-4'>{title}</Title>}
    <div>{children}</div>
  </section>
)
