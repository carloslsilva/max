'use client'

import { config } from '@/sanity/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export const Studio = () => <NextStudio config={config} />
