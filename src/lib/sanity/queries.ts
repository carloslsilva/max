import { createClient, groq } from 'next-sanity'
import { type JobType, type ProjectType, type SkillType } from '../types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
})

export const getJobs = async () => {
  const jobs = await client.fetch<JobType[]>(
    groq`
      *[_type == "job"] | order(startDate desc) {
        "id": _id,
        title,
        company,
        location,
        remote,
        startDate,
        endDate,
        description,
        "skills": skills[]->title
      }
    `
  )

  return jobs
}

export const getProjects = async () => {
  const projects = await client.fetch<ProjectType[]>(
    groq`
      *[_type == "project"] {
        "id": _id,
        description,
        "coverImage": coverImage.asset->url,
        githubUrl,
        externalUrl,
        "skills": skills[]->title,
        pinned
    }
    `
  )

  return projects
}

export const getSkillSet = async (
  set: 'Web Development' | 'Embedded Development' | 'Programming Language'
) => {
  const skillSet = await client.fetch<SkillType[]>(
    groq`
      *[_type == "skill" && "${set}" in set] {
        "id": _id,
        title,
        "slug": slug.current
      }
    `
  )

  return skillSet
}
