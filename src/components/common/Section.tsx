import type { FC, ReactNode } from 'react'
import { Container, Title } from '.'

type Props = {
  title?: string
  children: ReactNode
}

export const Section: FC<Props> = ({ title, children }) => (
  <Container className='py-5 lg:py-10' as='section'>
    {title && (
      <div>
        <Title as='h2'>{title}</Title>
      </div>
    )}
    <div>{children}</div>
  </Container>
)
