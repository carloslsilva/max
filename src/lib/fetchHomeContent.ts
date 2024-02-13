import type { Bio, Job, Project } from '@/lib/types'
import { client } from '@/sanity/client'
import * as queries from '@/sanity/queries'
import { sortJobs } from './sortJobs'

export const fetchHomeContent = async () => {
  const [
    bio,
    unsortedJobs,
    projects,
    frontendSkills,
    backendSkills,
    embeddedSkills
  ] = await Promise.all([
    client.fetch<Bio>(queries.getBio),
    client.fetch<Job[]>(queries.getJobsQuery),
    client.fetch<Project[]>(queries.getProjectsQuery),
    client.fetch(queries.getSkillSetQuery('Frontend Development')),
    client.fetch(queries.getSkillSetQuery('Backend Development')),
    client.fetch(queries.getSkillSetQuery('Embedded Development'))
  ])

  return {
    jobs: sortJobs(unsortedJobs),
    projects,
    frontendSkills,
    backendSkills,
    embeddedSkills
  }
}
