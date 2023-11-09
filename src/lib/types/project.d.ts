export type Project = {
  id: string
  title: string
  description: string
  coverImage: string
  githubUrl?: string
  externalUrl?: string
  skills: string[]
  pinned: boolean
}
