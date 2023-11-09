import type { Job as JobType } from '@lib/types'
import { formatDateRange } from '@lib/utils'
import { Badges, Section, Text, Title } from '@ui/components/common'
import type { FC } from 'react'
import Markdown from 'react-markdown'

type JobProps = {
  job: JobType
}

const Job: FC<JobProps> = ({ job }) => {
  return (
    <li className='mb-10 ml-4'>
      <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary-200' />
      <time className='mb-1 text-sm font-normal leading-none text-primary-400'>
        {formatDateRange(job.startDate, job.endDate)}
      </time>
      <Title as='h3'>
        {job.title} - <span className='font-sans'>{job.company}</span>
      </Title>
      <Markdown
        components={{
          p(props) {
            return <Text variant='compressed'>{props.children}</Text>
          }
        }}
      >
        {job.description}
      </Markdown>
      <Badges className='mt-2' tags={job.skills} />
    </li>
  )
}

type ExperienceProps = {
  jobs: JobType[]
}

export const Experience: FC<ExperienceProps> = ({ jobs }) => (
  <Section title='Experience'>
    <ol className='relative border-l border-gray-200'>
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </ol>
  </Section>
)
