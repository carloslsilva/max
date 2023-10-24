import { Container } from '@components/common'
import { JobType } from '@lib/types'
import { formatDateRange } from '@lib/utils'
import { FC } from 'react'
import Markdown from 'react-markdown'

type JobProps = {
  job: JobType
}

const Job: FC<JobProps> = ({ job }) => (
  <li className='mb-10 ml-4'>
    <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
    <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
      {formatDateRange(job.startDate, job.endDate)}
    </time>
    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
      {job.title} - <span className='text-gray-400'>{job.company}</span>
    </h3>
    <Markdown
      components={{
        p(props) {
          return (
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
              {props.children}
            </p>
          )
        }
      }}
    >
      {job.description}
    </Markdown>
  </li>
)

type ExperienceProps = {
  jobs: JobType[]
}

export const Experience: FC<ExperienceProps> = ({ jobs }) => {
  return (
    <Container>
      <ol className='relative border-l border-gray-200'>
        {jobs.map(job => (
          <Job key={job.id} job={job} />
        ))}
      </ol>
    </Container>
  )
}
