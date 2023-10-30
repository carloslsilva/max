import type { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLProps<HTMLParagraphElement> & {
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
