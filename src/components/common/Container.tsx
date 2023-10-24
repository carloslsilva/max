import clsx from 'clsx'
import { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLElement> {
  as?: 'section' | 'header' | 'footer'
}

export const Container: FC<Props> = ({
  as = 'section',
  className,
  children,
  ...rest
}) => {
  const Component = as
  return (
    <Component {...rest}>
      <div className={clsx('mx-auto max-w-4xl px-5 py-24', className)}>
        {children}
      </div>
    </Component>
  )
}
