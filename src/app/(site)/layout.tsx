import { Footer } from '@/components/Footer'
import { ToastContainer } from '@/components/ToastContainer'
import '@/styles/site-globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Fira_Code, Nunito, Roboto } from 'next/font/google'
import type { ReactNode } from 'react'

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

export const metadata: Metadata = {
  title: 'Carlos Silva',
  description:
    'Electrical Engineering major specializing in Electronics, with experience in software development and embedded systems. I have expertise in web development using technologies such as React, Next.js, and Node.js.'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${title.variable} ${sans.variable} ${mono.variable} font-sans text-primary-500`}
      >
        <main>{children}</main>
        <Footer />
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  )
}
