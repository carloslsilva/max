export type SkillType = {
  id: string
  title: string
  slug: string
}

export type SkillSetType = {
  title: string
  skills: SkillType[]
}
