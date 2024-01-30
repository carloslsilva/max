import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'
import type { StructureResolver } from 'sanity/structure'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const structureResolver: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      // Blog related
      S.listItem()
        .title('Post')
        .child(S.documentTypeList('post').title('post')),
      S.listItem()
        .title('Category')
        .child(S.documentTypeList('category').title('category')),
      S.listItem()
        .title('Author')
        .child(S.documentTypeList('author').title('author')),
      // Divider
      S.divider(),
      // Experience/Landing related
      S.listItem().title('Job').child(S.documentTypeList('job').title('job')),
      S.listItem()
        .title('Project')
        .child(S.documentTypeList('project').title('project')),
      S.listItem()
        .title('Skill')
        .child(S.documentTypeList('skill').title('skill'))
    ])

export const config = defineConfig({
  name: 'default',
  title: 'Max',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [
    structureTool({
      structure: structureResolver
    }),
    visionTool(),
    markdownSchema()
  ],
  schema: {
    types: schemaTypes
  }
})
