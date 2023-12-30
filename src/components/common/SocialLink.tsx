import { socialLinks } from '@/lib/socialLinks'
import type { SocialLink as SocialLinkType } from '@/lib/types'
import { FC } from 'react'
import { twJoin } from 'tailwind-merge'
import { Icon } from './Icon'

type SocialLinkProps = {
  socialLink: SocialLinkType
}

const SocialLink: FC<SocialLinkProps> = ({ socialLink }) => (
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

type SocialLinksProps = {
  className?: string
}

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => (
  <span
    className={twJoin(
      'flex flex-row items-center justify-center gap-3',
      className
    )}
  >
    {socialLinks.map(socialLink => (
      <SocialLink key={socialLink.icon} socialLink={socialLink} />
    ))}
  </span>
)
