import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  tags: string[]
  className?: string
}

export const Badges: FC<Props> = ({ tags, className }) => (
  <div className='flex flex-wrap items-center gap-2'>
    {tags.map((tag, index) => (
      <span
        key={`${tag}-${index}`}
        className={twMerge(
          'rounded  bg-primary-100 px-2 py-1 text-xs text-primary-500',
          className
        )}
      >
        {tag}
      </span>
    ))}
  </div>
)
