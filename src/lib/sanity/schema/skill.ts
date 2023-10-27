import { defineField, defineType } from 'sanity'

const maxLength = 16

export const skill = defineType({
  title: 'Skill',
  name: 'skill',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: maxLength,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '')
            .replace(/\./g, '')
            .replace(/\-/g, '')
            .replace(/\_/g, '')
            .slice(0, maxLength)
      }
    }),
    defineField({
      title: 'Set',
      name: 'set',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Development', value: 'Web Development' },
          { title: 'Embedded Development', value: 'Embedded Development' },
          { title: 'Programming Language', value: 'Programming Language' }
        ]
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
})
