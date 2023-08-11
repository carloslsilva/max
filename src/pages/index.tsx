import { Jobs } from '@lib/jobs'
import { type Job } from '@lib/types'
import ReactMarkdown from 'react-markdown'

type Props = {
  allJobs: Job[]
}

export default function HomePage(props: Props) {
  return (
    <>
      {props.allJobs.map(job => (
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

export async function getStaticProps() {
  const jobs = new Jobs()
  const allJobs = await jobs.getAll()
  return {
    props: { allJobs }
  }
}
