import { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLProps<HTMLElement> {
  as?: 'section' | 'header' | 'footer'
  variant?: 'long' | 'short'
}

export const Container: FC<Props> = ({
  as = 'section',
  variant = 'short',
  className,
  children,
  ...rest
}) => {
  const Component = as
  return (
    <Component {...rest}>
      <div
        className={twMerge(
          variant === 'long' && 'container',
          variant === 'short' && 'max-w-5xl',
          'mx-auto px-5',
          className
        )}
      >
        {children}
      </div>
    </Component>
  )
}
