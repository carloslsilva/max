import { FC, ReactNode } from 'react'
import {
  IconBars,
  IconBarsStaggered,
  IconBookmark,
  IconC,
  IconCode,
  IconCodepen,
  IconCpp,
  IconCsharp,
  IconCss,
  IconExternal,
  IconFacebook,
  IconFile,
  IconFolder,
  IconFork,
  IconFreeCodeCamp,
  IconGit,
  IconGitHub,
  IconHtml,
  IconInstagram,
  IconJs,
  IconLink,
  IconLinkedin,
  IconMicrochip,
  IconNodeJs,
  IconReact,
  IconStar,
  IconTwitter,
  IconXmark,
  IconXtwiter,
  IconYoutube
} from './Icons'

type Props = {
  name: string
}

export const Icon: FC<Props> = ({ name }) => {
  const iconComponents: Record<string, ReactNode> = {
    bars: <IconBars />,
    barsstaggered: <IconBarsStaggered />,
    bookmark: <IconBookmark />,
    c: <IconC />,
    code: <IconCode />,
    codepen: <IconCodepen />,
    cpp: <IconCpp />,
    csharp: <IconCsharp />,
    css: <IconCss />,
    external: <IconExternal />,
    facebook: <IconFacebook />,
    file: <IconFile />,
    folder: <IconFolder />,
    fork: <IconFork />,
    freeCodeCamp: <IconFreeCodeCamp />,
    git: <IconGit />,
    github: <IconGitHub />,
    html: <IconHtml />,
    instagram: <IconInstagram />,
    js: <IconJs />,
    link: <IconLink />,
    linkedin: <IconLinkedin />,
    microchip: <IconMicrochip />,
    nodejs: <IconNodeJs />,
    react: <IconReact />,
    star: <IconStar />,
    twitter: <IconTwitter />,
    xmark: <IconXmark />,
    xtwitter: <IconXtwiter />,
    youtube: <IconYoutube />
  }

  return iconComponents[name] || <IconExternal />
}
