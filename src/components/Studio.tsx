'use client'

import config from '@root/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export const Studio = () => <NextStudio config={config} />
