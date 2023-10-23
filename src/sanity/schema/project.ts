import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule.required().error('A title is required')]
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url'
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'markdown',
      validation: Rule => Rule.required().error('Description is required')
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => [
        Rule.required()
          .integer()
          .positive()
          .error('Order must be a positive integer')
      ]
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    })
  ]
})
