import { groq } from 'next-sanity'

export const getBio = groq`
  *[_type == 'author' && slug.current == 'carlos'][0] {
    name,
    bio
  }
`

export const getJobsQuery = groq`
  *[_type == "job"] {
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

export const getProjectsQuery = groq`
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
`

export const getSkillSetQuery = (
  set: 'Frontend Development' | 'Backend Development' | 'Embedded Development'
) => groq`
  *[_type == "skill" && "${set}" in set] | order(title asc) {
    "id": _id,
    title,
    "slug": slug.current
  }
`
