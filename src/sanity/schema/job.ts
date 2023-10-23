import { defineField, defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule.required().error('A title is required')]
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => [Rule.required().error('A company is required')]
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => [Rule.required().error('A location is required')]
    }),
    defineField({
      name: 'remote',
      title: 'Remote?',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'starDate',
      title: 'Start Date',
      type: 'date',
      validation: Rule => [
        Rule.required().error('A start date is required'),
        Rule.min('2016-01-01').error('Start date must be greater than 2016 Jan')
      ]
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: Rule => [
        Rule.min(Rule.valueOfField('startDate')).error(
          'End date must greater than start date'
        ),
        Rule.min('2016-01-01').error('Start date must be greater than 2016 Jan')
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'markdown'
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
      date: 'starDate'
    },
    prepare(selection) {
      const { title, subtitle, date } = selection
      return { title, subtitle: `${subtitle} (${date.split('-')[0]})` }
    }
  }
})
