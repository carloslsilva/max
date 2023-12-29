import { Fira_Code, Nunito, Roboto } from 'next/font/google'

export const title = Roboto({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title'
})

export const sans = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

export const mono = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
})
