import { Footer } from '@components/Footer'
import { Fira_Code, Nunito, Roboto } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Carlos Silva',
  description:
    'Electrical engineer majoring in electronics with experience in front-end development, firmware development, and hardware prototyping.'
}

const roboto = Roboto({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${nunito.variable} ${firaCode.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
