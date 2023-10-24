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
    <>
      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        <li className='mb-10 ml-4'>
          <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            February 2022
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Application UI code in Tailwind CSS
          </h3>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce &amp; Marketing
            pages.
          </p>
          <a
            href='#'
            className='inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
          >
            Learn more{' '}
            <svg
              className='ml-2 h-3 w-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            March 2022
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Marketing UI design in Figma
          </h3>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className='ml-4'>
          <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            April 2022
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>

      <Container>
        <ol className='relative border-l border-gray-200'>
          {jobs.map(job => (
            <Job key={job.id} job={job} />
          ))}
        </ol>
      </Container>
    </>
  )
}
