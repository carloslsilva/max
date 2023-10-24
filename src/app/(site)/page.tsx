import { About, Experience } from '@components/home'
import { getJobs } from '@lib/sanity/queries'

export default async function Home() {
  const jobs = await getJobs()
  return (
    <>
      <About />
      <Experience jobs={jobs} />
    </>
  )
}
