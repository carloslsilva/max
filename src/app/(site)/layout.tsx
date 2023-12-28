import '@/styles/site-globals.css'
import { Footer } from '@/ui/components/Footer'
import { ToastContainer } from '@/ui/components/ToastContainer'
import { mono, sans, title } from '@/ui/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
        <SpeedInsights />
      </body>
    </html>
  )
}
