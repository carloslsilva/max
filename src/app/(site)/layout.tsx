import { Footer } from '@ui/components/Footer'
import { ToastContainer } from '@ui/components/ToastContainer'
import { mono, sans, title } from '@ui/fonts'
import '@ui/styles/site-globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
        <SpeedInsights />
      </body>
    </html>
  )
}
