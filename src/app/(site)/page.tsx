import { About, Contact, Experience, Projects, Skills } from '@/components/home'
import type { Job, Project, SkillSet } from '@/lib/types'
import { client } from '@/sanity/client'
import * as queries from '@/sanity/queries'

const clientOptions = {
  next: { revalidate: 3600 }
}

export default async function Home() {
  const unsortedJobs = await client.fetch<Job[]>(
    queries.getJobsQuery,
    clientOptions
  )

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

  const jobs = unsortedJobs.sort((a, b) => {
    if (a.endDate === null && b.endDate === null) {
      return (new Date(b.startDate) as any) - (new Date(a.startDate) as any)
    } else if (a.endDate === null) {
      return -1
    } else if (b.endDate === null) {
      return 1
    } else {
      return (new Date(b.endDate) as any) - (new Date(a.endDate) as any)
    }
  })

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
