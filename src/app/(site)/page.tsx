import { About, Contact, Experience, Projects, Skills } from '@components/home'
import { getJobs, getProjects, getSkillSet } from '@lib/sanity/queries'
import { type SkillSetType } from '@lib/types'

export default async function Home() {
  const jobs = await getJobs()
  const projects = await getProjects()
  const skillSets: SkillSetType[] = [
    {
      title: 'Frontend Development',
      skills: await getSkillSet('Frontend Development')
    },
    {
      title: 'Backend Development',
      skills: await getSkillSet('Backend Development')
    },
    {
      title: 'Embedded Development',
      skills: await getSkillSet('Embedded Development')
    }
  ]

  return (
    <>
      <About />
      <Experience jobs={jobs} />
      <Skills skillSets={skillSets} />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}
