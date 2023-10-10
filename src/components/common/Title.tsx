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
          'text-5xl font-bold': 'h1' === as,
          'text-3xl font-bold': 'h2' === as,
          'text-lg font-semibold': 'h3' === as
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
