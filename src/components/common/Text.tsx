import { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLProps<HTMLParagraphElement> {
  variant?: 'bigger' | 'normal' | 'compressed'
}

export const Text: FC<Props> = ({
  variant = 'normal',
  className,
  children,
  ...rest
}) => (
  <p
    className={twMerge(
      'font-base',
      variant == 'bigger' && 'text-lg leading-relaxed',
      variant == 'normal' && 'text-base leading-relaxed',
      variant == 'compressed' && 'text-base leading-normal',
      className
    )}
    {...rest}
  >
    {children}
  </p>
)
