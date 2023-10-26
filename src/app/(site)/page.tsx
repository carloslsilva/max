import { About, Contact, Experience, Projects, Skills } from '@components/home'
import { getJobs, getProjects, getSkillSet } from '@lib/sanity/queries'
import { type SkillSetType } from '@lib/types'

export default async function Home() {
  const jobs = await getJobs()
  const projects = await getProjects()
  const skillSets: SkillSetType[] = [
    {
      title: 'Web Development',
      skills: await getSkillSet('Web Development')
    },
    {
      title: 'Embedded Development',
      skills: await getSkillSet('Embedded Development')
    },
    {
      title: 'Programming Language',
      skills: await getSkillSet('Programming Language')
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
