import { defineField, defineType } from 'sanity'

const maxLength = 16

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: maxLength,
        slugify: input =>
          input.toLowerCase().replace(/\s+/g, '').slice(0, maxLength)
      }
    })
  ]
})
