import { Badges, Icon, Section, Text, Title } from '@components/common'
import { type ProjectType } from '@lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import Markdown from 'react-markdown'

type ProjectImageProps = {
  src: string
  alt: string
}

const ProjectImage: FC<ProjectImageProps> = ({ src, alt }) => {
  return (
    <div className='overflow-hidden rounded shadow-xl md:w-9/12'>
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
  <Link
    href={href}
    title={title}
    target='_blank'
    rel='noopener noreferrer'
    className='text-primary-500 hover:text-primary-900'
  >
    <div className='flex h-5 w-5 items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 active:scale-90'>
      {children}
    </div>
  </Link>
)

type ProjectProps = {
  project: ProjectType
}

const Project: FC<ProjectProps> = ({ project }) => (
  <div className='flex flex-col-reverse gap-4 py-8 md:flex-row'>
    <div className='flex flex-col items-center justify-center md:w-3/12'>
      <ProjectImage src={project.coverImage} alt={project.title} />
    </div>

    <div className='md:w-9/12'>
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
        className='my-4'
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
