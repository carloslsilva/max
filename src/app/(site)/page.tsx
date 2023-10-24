import { About, Experience, Projects, Skills } from '@components/home'
import { getJobs, getProjects, getSkillSet } from '@lib/sanity/queries'

export default async function Home() {
  const jobs = await getJobs()
  const projects = await getProjects()
  const skillSet = await getSkillSet('Embedded Development')

  return (
    <>
      <About />
      <Experience jobs={jobs} />
      <Skills />
      <Projects />
    </>
  )
}
