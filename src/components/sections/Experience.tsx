import { Section, Text, Title } from '@components/common'
import { type Job } from '@lib/types'
import { formatDateRange } from '@lib/utils'
import { FC } from 'react'
import Markdown from 'react-markdown'

type Props = {
  jobs: Job[]
}

export const Experience: FC<Props> = ({ jobs }) => (
  <Section title='Experience'>
    <ol className='relative ml-1 border-l border-gray-200'>
      {jobs.map(job => (
        <li key={job.title} className='mb-10 ml-4'>
          <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
            {formatDateRange(job.startDate, job.endDate)}
          </time>
          <Title as='h3'>
            {job.title} - <span className='text-gray-400'>{job.company}</span>
          </Title>
          <div className='mt-2'>
            <Markdown
              components={{
                p(props) {
                  return <Text>{props.children}</Text>
                }
              }}
            >
              {job.description}
            </Markdown>
          </div>
        </li>
      ))}
    </ol>
  </Section>
)
