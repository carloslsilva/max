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
          input
            .toLowerCase()
            .replace(/\s+/g, '')
            .replace(/\./g, '')
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
          { title: 'Software Development', value: 'softwareDevelopment' },
          { title: 'Programming Language', value: 'programmingLanguage' },
          { title: 'Embedded Development', value: 'embeddedDevelopment' },
          { title: 'Web Development', value: 'webDevelopment' }
        ]
      }
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
})
