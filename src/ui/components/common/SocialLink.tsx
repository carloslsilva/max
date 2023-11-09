import type { SocialLink as SocialLinkType } from '@lib/types'
import { FC } from 'react'
import { Icon } from './Icon'

type Props = {
  socialLink: SocialLinkType
}

export const SocialLink: FC<Props> = ({ socialLink }) => (
  <a
    className='flex h-5 w-5 flex-row items-center justify-center text-primary-500 duration-300 ease-in-out hover:scale-105 hover:text-primary-900 active:animate-ping'
    href={socialLink.url}
    title={socialLink.title}
    rel='noopener noreferrer'
    target='_blank'
  >
    <Icon name={socialLink.icon} />
  </a>
)
