import { defineField, defineType } from 'sanity'

export const job = defineType({
  title: 'Job',
  name: 'job',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => [Rule.required().error('A title is required')]
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'string',
      validation: Rule => [Rule.required().error('A company is required')]
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'string',
      validation: Rule => [Rule.required().error('A location is required')]
    }),
    defineField({
      title: 'Remote?',
      name: 'remote',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      validation: Rule => [
        Rule.required().error('A start date is required'),
        Rule.min('2016-01-01').error('Start date must be greater than 2016 Jan')
      ]
    }),
    defineField({
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      validation: Rule => [
        Rule.required().error('A end date is required'),
        Rule.min('2016-01-01').error('End date must be greater than 2016 Jan')
      ]
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'markdown'
    }),
    defineField({
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
      date: 'startDate'
    },
    prepare(selection) {
      const { title, subtitle, date } = selection
      return { title, subtitle: `${subtitle} (${date.split('-')[0]})` }
    }
  }
})
