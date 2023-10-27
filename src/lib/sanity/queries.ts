import { groq } from 'next-sanity'
import SanityClient from 'next-sanity-client'
import { type JobType, type ProjectType, type SkillType } from '../types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

const client = new SanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: dataset === 'production'
})

export const getJobs = async () => {
  const jobs = await client.fetch<JobType[]>({
    query: groq`
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
  `,
    config: {
      next: { revalidate: 3600 }
    }
  })

  return jobs
}

export const getProjects = async () => {
  const projects = await client.fetch<ProjectType[]>({
    query: groq`
      *[_type == "project"] {
        "id": _id,
        title,
        description,
        "coverImage": coverImage.asset->url,
        githubUrl,
        externalUrl,
        "skills": skills[]->title,
        pinned
      }
    `,
    config: {
      next: { revalidate: 3600 }
    }
  })

  return projects
}

export const getSkillSet = async (
  set: 'Web Development' | 'Embedded Development' | 'Programming Language'
) => {
  const skillSet = await client.fetch<SkillType[]>({
    query: groq`
      *[_type == "skill" && "${set}" in set] | order(title asc) {
        "id": _id,
        title,
        "slug": slug.current
      }
    `,
    config: {
      next: { revalidate: 3600 }
    }
  })

  return skillSet
}
