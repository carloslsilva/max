import { About, Contact, Experience, Projects, Skills } from '@components/home'
import { client } from '@lib/sanity/client'
import * as queries from '@lib/sanity/queries'
import type { JobType, ProjectType, SkillSetType } from '@lib/types'

const clientOptions = {
  next: { revalidate: 3600 }
}

export default async function Home() {
  const jobs = await client.fetch<JobType[]>(
    queries.getJobsQuery,
    clientOptions
  )

  const projects = await client.fetch<ProjectType[]>(
    queries.getProjectsQuery,
    clientOptions
  )

  const skillSets: SkillSetType[] = [
    {
      title: 'Frontend Development',
      skills: await client.fetch(
        queries.getSkillSetQuery('Frontend Development'),
        clientOptions
      )
    },
    {
      title: 'Backend Development',
      skills: await client.fetch(
        queries.getSkillSetQuery('Backend Development'),
        clientOptions
      )
    },
    {
      title: 'Embedded Development',
      skills: await client.fetch(
        queries.getSkillSetQuery('Embedded Development'),
        clientOptions
      )
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
