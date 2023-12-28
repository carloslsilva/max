import { defineField, defineType } from 'sanity'

export const project = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => [Rule.required().error('A title is required')]
    }),
    defineField({
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      title: 'Pinned?',
      name: 'pinned',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      title: 'Github URL',
      name: 'githubUrl',
      type: 'url'
    }),
    defineField({
      title: 'External URL',
      name: 'externalUrl',
      type: 'url'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'markdown',
      validation: Rule => Rule.required().error('Description is required')
    }),
    defineField({
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    })
  ]
})
