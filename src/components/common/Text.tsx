import { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Text: FC<HTMLProps<HTMLParagraphElement>> = ({
  className,
  children,
  ...rest
}) => (
  <p
    className={twMerge('font-base text-base leading-relaxed', className)}
    {...rest}
  >
    {children}
  </p>
)
