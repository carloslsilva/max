export type Skill = {
  id: string
  title: string
  slug: string
}

export type SkillSet = {
  title: string
  skills: Skill[]
}
