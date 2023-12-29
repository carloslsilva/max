import { defineField, defineType } from 'sanity'

export const post = defineType({
  title: 'Post',
  name: 'post',
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
        maxLength: 96
      }
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: { type: 'author' }
    }),
    defineField({
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime'
    }),
    defineField({
      title: 'Cover image',
      name: 'coverImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'markdown'
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
})
