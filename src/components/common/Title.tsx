import { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLProps<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3'
}

export const Title: FC<Props> = ({ as = 'h2', className, children }) => {
  let Tag: keyof JSX.IntrinsicElements = as
  return (
    <Tag
      className={twMerge(
        'leading-none text-gray-800',
        'h1' === as && 'text-4xl font-bold text-gray-900 sm:text-5xl',
        'h2' === as && 'text-3xl font-semibold sm:text-4xl',
        'h3' === as && 'text-lg font-semibold',
        className
      )}
    >
      {children}
    </Tag>
  )
}
