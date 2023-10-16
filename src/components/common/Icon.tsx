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
    Bars: <IconBars />,
    BarsStaggered: <IconBarsStaggered />,
    Bookmark: <IconBookmark />,
    C: <IconC />,
    Code: <IconCode />,
    Codepen: <IconCodepen />,
    Cpp: <IconCpp />,
    Csharp: <IconCsharp />,
    Css: <IconCss />,
    External: <IconExternal />,
    Facebook: <IconFacebook />,
    File: <IconFile />,
    Folder: <IconFolder />,
    Fork: <IconFork />,
    FreeCodeCamp: <IconFreeCodeCamp />,
    Git: <IconGit />,
    GitHub: <IconGitHub />,
    Html: <IconHtml />,
    Instagram: <IconInstagram />,
    Js: <IconJs />,
    Link: <IconLink />,
    Linkedin: <IconLinkedin />,
    Microchip: <IconMicrochip />,
    NodeJs: <IconNodeJs />,
    React: <IconReact />,
    Star: <IconStar />,
    Twitter: <IconTwitter />,
    Xmark: <IconXmark />,
    Xtwitter: <IconXtwiter />,
    Youtube: <IconYoutube />
  }

  return iconComponents[name] || <IconExternal />
}
