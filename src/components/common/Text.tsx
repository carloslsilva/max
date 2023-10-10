import clsx from 'clsx'
import { FC, HTMLProps } from 'react'

export const Text: FC<HTMLProps<HTMLParagraphElement>> = ({
  className,
  children
}) => (
  <p className={clsx('text-base font-normal text-gray-500', className)}>
    {children}
  </p>
)
