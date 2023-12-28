import type { Job, Project, SkillSet } from '@/lib/types'
import { client } from '@/sanity/client'
import * as queries from '@/sanity/queries'
import {
  About,
  Contact,
  Experience,
  Projects,
  Skills
} from '@/ui/components/home'

const clientOptions = {
  next: { revalidate: 3600 }
}

export default async function Home() {
  const jobs = await client.fetch<Job[]>(queries.getJobsQuery, clientOptions)

  const projects = await client.fetch<Project[]>(
    queries.getProjectsQuery,
    clientOptions
  )

  const skillSets: SkillSet[] = [
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
