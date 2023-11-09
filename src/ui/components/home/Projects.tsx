import type { Project as ProjectType } from '@lib/types'
import { Badges, Icon, Section, Text, Title } from '@ui/components/common'
import Image from 'next/image'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'
import Markdown from 'react-markdown'

type ProjectImageProps = {
  src: string
  alt: string
}

const ProjectImage: FC<ProjectImageProps> = ({ src, alt }) => {
  return (
    <div className='w-10/12 overflow-hidden rounded shadow-xl sm:w-11/12'>
      <Image
        src={src}
        title={alt}
        alt={alt}
        width={1200}
        height={630}
        placeholder='blur'
        blurDataURL={src}
        quality={25}
        className='h-auto w-max object-cover'
      />
    </div>
  )
}

type ProjectLinkProps = {
  title: string
  href: string
  children: ReactNode
}

const ProjectLink: FC<ProjectLinkProps> = ({ href, title, children }) => (
  <Link href={href} title={title} target='_blank' rel='noopener noreferrer'>
    <div className='flex h-5 w-5 items-center justify-center text-primary-500 transition-all duration-100 hover:-translate-y-1 hover:text-primary-900 active:animate-ping'>
      {children}
    </div>
  </Link>
)

type ProjectProps = {
  project: ProjectType
}

const Project: FC<ProjectProps> = ({ project }) => (
  <div className='flex flex-col-reverse gap-6 py-8 sm:flex-row'>
    <div className='flex items-center justify-center sm:w-3/12'>
      <ProjectImage src={project.coverImage} alt={project.title} />
    </div>
    <div className='sm:w-9/12'>
      <div className='flex flex-row justify-start'>
        <Title className='my-0 mr-4' as='h3'>
          {project.title}
        </Title>
        <div className='flex items-center justify-center gap-4'>
          {project.githubUrl && (
            <ProjectLink href={project.githubUrl} title='Source Code on GitHub'>
              <Icon name='github' />{' '}
            </ProjectLink>
          )}
          {project.externalUrl && (
            <ProjectLink href={project.externalUrl} title='Live Preview'>
              <Icon name='link' />
            </ProjectLink>
          )}
        </div>
      </div>
      <Markdown
        className='mb-4 mt-2'
        components={{
          p(props) {
            return <Text>{props.children}</Text>
          }
        }}
      >
        {project.description}
      </Markdown>

      <Badges tags={project.skills} />
    </div>
  </div>
)

type ProjectsProps = {
  projects: ProjectType[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => (
  <Section title='Projects'>
    <div className='-my-8 divide-y-2 divide-primary-100'>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  </Section>
)
