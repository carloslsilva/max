import { Icon } from '@components/common'
import { Experience } from '@components/sections'
import { Jobs } from '@lib/jobs'
import { type Job } from '@lib/types'

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
      <Experience jobs={jobs} />
      <Icon name='Csharp' />
    </>
  )
}
