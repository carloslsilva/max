import { FC, ReactNode } from 'react'
import { Container, Title } from '.'

type Props = {
  title?: string
  children: ReactNode
}

export const Section: FC<Props> = ({ title, children }) => {
  const classes = 'py-3 lg:py-10'

  if (!title) {
    return <Container className={classes}>{children}</Container>
  }

  return (
    <Container className={classes} as='section'>
      {title && (
        <div>
          <Title as='h2'>{title}</Title>
        </div>
      )}
      <div>{children}</div>
    </Container>
  )
}
