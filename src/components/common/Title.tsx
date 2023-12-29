import type { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLProps<HTMLHeadingElement> & {
  as: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Title: FC<Props> = ({ as, className, children, ...rest }) => {
  let Tag: keyof JSX.IntrinsicElements = as
  return (
    <Tag
      className={twMerge(
        'font-title',
        'h1' === as && 'mb-4 text-3xl font-bold text-primary-800 lg:text-4xl',
        'h2' === as &&
          'mb-4 text-2xl font-medium text-primary-800 sm:mb-8 sm:text-3xl',
        'h3' === as && 'mb-3 text-lg text-primary-600',
        'h4' === as && 'font-sans text-xs text-primary-500 sm:text-base',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
