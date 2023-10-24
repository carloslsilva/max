import { createClient, groq } from 'next-sanity'
import { type JobType } from '../types'

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
        "skills": skills[]->slug.current
      }
    `
  )
  return jobs
}
