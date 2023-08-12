import { Jobs } from '@lib/jobs'
import { type Job } from '@lib/types'
import ReactMarkdown from 'react-markdown'

export async function getStaticProps() {
  const jobs = await new Jobs().getAll()
  return {
    props: { jobs }
  }
}

type Props = {
  jobs: Job[]
}

export default function HomePage({ jobs }: Props) {
  return (
    <>
      {jobs.map(job => (
        <div key={job.title} className='mt-3 flex flex-col'>
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          <p>{job.location}</p>
          <ReactMarkdown>{job.description}</ReactMarkdown>
        </div>
      ))}
    </>
  )
}
