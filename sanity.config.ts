import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const config = defineConfig({
  name: 'default',
  title: 'max',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [deskTool(), visionTool(), markdownSchema()],
  schema: {
    types: schemaTypes
  }
})

export default config
