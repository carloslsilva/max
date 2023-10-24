import { defineField, defineType } from 'sanity'

export const author = defineType({
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string'
    }),
    defineField({
      title: 'Short Name',
      name: 'shortName',
      type: 'string'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
      type: 'markdown'
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string'
            }),
            defineField({
              title: 'URL',
              name: 'url',
              type: 'url'
            })
          ]
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
