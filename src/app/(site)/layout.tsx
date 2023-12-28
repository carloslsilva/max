import { Footer } from '@/components/Footer'
import { ToastContainer } from '@/components/ToastContainer'
import '@/styles/site-globals.css'
import { mono, sans, title } from '@/ui/fonts'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Carlos Silva',
  description: 'Frontend developer & Firmware developer.'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${title.variable} ${sans.variable} ${mono.variable} font-sans text-primary-500`}
      >
        {children}
        <Footer />
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  )
}
