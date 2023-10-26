import { FC, ReactNode } from 'react'
import {
  IconAstro,
  IconBootstrap,
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
  IconFreeCodeCamp,
  IconGit,
  IconGitHub,
  IconHtml,
  IconInstagram,
  IconJavaScript,
  IconLink,
  IconLinkedIn,
  IconMicrochip,
  IconNextJs,
  IconNodeJs,
  IconReact,
  IconRedux,
  IconSass,
  IconTailwindCss,
  IconTwitter,
  IconTypeScript,
  IconYouTube
} from './Icons'
import { TwitterX } from './Icons/TwitterX'

type Props = {
  name: string
}

export const Icon: FC<Props> = ({ name }) => {
  const iconComponents: Record<string, ReactNode> = {
    astro: <IconAstro />,
    bootstrap: <IconBootstrap />,
    c: <IconC />,
    code: <IconCode />,
    codepen: <IconCodepen />,
    cpp: <IconCpp />,
    csharp: <IconCsharp />,
    css: <IconCss />,
    external: <IconExternal />,
    facebook: <IconFacebook />,
    freertos: <IconMicrochip />,
    file: <IconFile />,
    folder: <IconFolder />,
    freeCodeCamp: <IconFreeCodeCamp />,
    git: <IconGit />,
    github: <IconGitHub />,
    html: <IconHtml />,
    instagram: <IconInstagram />,
    javascript: <IconJavaScript />,
    link: <IconLink />,
    linkedin: <IconLinkedIn />,
    microchip: <IconMicrochip />,
    nextjs: <IconNextJs />,
    nodejs: <IconNodeJs />,
    react: <IconReact />,
    redux: <IconRedux />,
    sass: <IconSass />,
    tailwindcss: <IconTailwindCss />,
    typescript: <IconTypeScript />,
    twitter: <IconTwitter />,
    twitterx: <TwitterX />,
    styledcomponents: <IconCode />,
    youtube: <IconYouTube />
  }

  return iconComponents[name] || <IconExternal />
}
