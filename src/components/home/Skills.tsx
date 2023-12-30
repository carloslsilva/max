import type { SkillSet as SkillSetType, Skill as SkillType } from '@/lib/types'
import type { FC } from 'react'
import { Icon, Section, Title } from '../common'

type SkillProps = {
  skill: SkillType
}

const Skill: FC<SkillProps> = ({ skill }) => (
  <div className='flex h-full items-center rounded-lg border border-primary-200 bg-primary-50 p-4 duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl'>
    <div className='duration-600 mr-4 flex h-6 w-6 items-center justify-center text-primary-700'>
      <Icon name={skill.slug} />
    </div>
    <Title className='line-clamp-1' as='h4'>
      {skill.title}
    </Title>
  </div>
)

type SkillSetProps = {
  skillSet: SkillSetType
}

const SkillSet: FC<SkillSetProps> = ({ skillSet }) => (
  <div className='pt-6 first:pt-1'>
    <Title as='h3'>{skillSet.title}</Title>
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
      {skillSet.skills.map(skill => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  </div>
)

type SkillsProps = {
  skillSets: SkillSetType[]
}

export const Skills: FC<SkillsProps> = ({ skillSets }) => (
  <Section title='Skills'>
    {skillSets.map(skillSet => (
      <SkillSet
        key={skillSet.title.toLowerCase().replace(/\s+/g, '')}
        skillSet={skillSet}
      />
    ))}
  </Section>
)
