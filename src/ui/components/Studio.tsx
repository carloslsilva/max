'use client'

import { config } from '@/lib/sanity/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export const Studio = () => <NextStudio config={config} />
