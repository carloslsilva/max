import type { Job, Project } from '@/lib/types'
import { client } from '@/sanity/client'
import * as queries from '@/sanity/queries'
import { sortJobs } from './sortJobs'

const clientOptions = {
  next: { revalidate: 30 }
}

export const fetchHomeContent = async () => {
  const [
    unsortedJobs,
    projects,
    frontendSkills,
    backendSkills,
    embeddedSkills
  ] = await Promise.all([
    client.fetch<Job[]>(queries.getJobsQuery, clientOptions),
    client.fetch<Project[]>(queries.getProjectsQuery, clientOptions),
    client.fetch(
      queries.getSkillSetQuery('Frontend Development'),
      clientOptions
    ),
    client.fetch(
      queries.getSkillSetQuery('Backend Development'),
      clientOptions
    ),
    client.fetch(
      queries.getSkillSetQuery('Embedded Development'),
      clientOptions
    )
  ])

  return {
    jobs: sortJobs(unsortedJobs),
    projects,
    frontendSkills,
    backendSkills,
    embeddedSkills
  }
}
