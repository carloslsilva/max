'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../sanity/sanity.config'

export const Studio = () => <NextStudio config={config} />
