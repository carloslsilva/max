import { FC, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLProps<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3'
}

export const Title: FC<Props> = ({
  as = 'h2',
  className,
  children,
  ...rest
}) => {
  let Tag: keyof JSX.IntrinsicElements = as
  return (
    <Tag
      className={twMerge(
        'font-title',
        'h1' === as && 'text-3xl font-bold text-primary-800 lg:text-4xl',
        'h2' === as && 'mb-8 text-2xl font-medium text-primary-800 sm:text-3xl',
        'h3' === as && 'mb-3 text-lg text-primary-600',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
