import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const config = defineConfig({
  name: 'default',
  title: 'CS',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [deskTool(), visionTool(), markdownSchema()],
  schema: {
    types: schemaTypes
  }
})
