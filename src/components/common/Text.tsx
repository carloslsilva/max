import { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Text: FC<HTMLProps<HTMLParagraphElement>> = ({
  className,
  children
}) => (
  <p className={twMerge('text-base font-normal text-gray-500', className)}>
    {children}
  </p>
)
