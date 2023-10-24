import { defineField, defineType } from 'sanity'

export const category = defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text'
    })
  ]
})
