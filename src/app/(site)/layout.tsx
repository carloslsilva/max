import { Footer } from '@ui/components/Footer'
import { ToastContainer } from '@ui/components/ToastContainer'
import '@ui/styles/site-globals.css'
import type { Metadata } from 'next'
import { Fira_Code, Nunito, Roboto } from 'next/font/google'
import type { ReactNode } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

export const metadata: Metadata = {
  title: 'Carlos Silva',
  description:
    'Electrical engineer majoring in electronics with experience in front-end development, firmware development, and hardware prototyping.'
}

const title = Roboto({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title'
})

const sans = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

const mono = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${title.variable} ${sans.variable} ${mono.variable} font-sans text-primary-500`}
      >
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
