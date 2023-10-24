import clsx from 'clsx'
import { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3'
}

export const Title: FC<Props> = ({ as = 'h2', className, children }) => {
  let Tag: keyof JSX.IntrinsicElements = as
  return (
    <Tag
      className={clsx(
        'leading-none text-gray-800',
        {
          'text-4xl font-bold text-gray-900 sm:text-5xl': 'h1' === as,
          'text-3xl font-semibold sm:text-4xl': 'h2' === as,
          'text-lg font-semibold': 'h3' === as
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
