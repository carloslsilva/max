import { About, Contact, Experience, Projects, Skills } from '@/components/home'
import { fetchHomeContent } from '@/lib/fetchHomeContent'
import { SkillSet } from '@/lib/types'

export const revalidate = 3600

export default async function Home() {
  const { bio, jobs, projects, frontendSkills, backendSkills, embeddedSkills } =
    await fetchHomeContent()

  const skillSets: SkillSet[] = [
    { title: 'Frontend Development', skills: frontendSkills },
    { title: 'Backend Development', skills: backendSkills },
    { title: 'Embedded Development', skills: embeddedSkills }
  ]

  return (
    <>
      <About bio={bio} />
      <Experience jobs={jobs} />
      <Skills skillSets={skillSets} />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}
