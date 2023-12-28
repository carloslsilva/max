import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'
import { deskTool } from 'sanity/desk'
import { deskStructure } from './deskStructure'
import { schemaTypes } from './schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const config = defineConfig({
  name: 'default',
  title: 'Max',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [
    deskTool({
      structure: deskStructure
    }),
    visionTool(),
    markdownSchema()
  ],
  schema: {
    types: schemaTypes
  }
})
