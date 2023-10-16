import { Icon } from '@components/common'
import { Project as ProjectType } from '@lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

type ProjectImageProps = {
  src: string
  alt: string
}

const ProjectImage: FC<ProjectImageProps> = ({ src, alt }) => {
  return (
    <div className='relative -mt-[35%] w-full shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:z-10 sm:-mt-0 sm:w-1/2 md:-ml-[35%] md:w-8/12'>
      <Image
        title={alt}
        alt={alt}
        src={src}
        width={1200}
        height={630}
        placeholder='blur'
        blurDataURL={src}
        quality={25}
        className='backdrop-blur-xl transition-all duration-300 lg:group-hover:scale-110'
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

type ProjectLinkProps = {
  title: string
  href: string
  icon: ReactNode
}

const ProjectLink: FC<ProjectLinkProps> = ({ href, title, icon }) => (
  <Link
    href={href}
    title={title}
    target='_blank'
    rel='noopener noreferrer'
    className='text-gray-500 hover:text-black'
  >
    <div className='flex h-6 w-6 items-center justify-center transition-all hover:scale-110 active:scale-90'>
      {icon}
    </div>
  </Link>
)

export function Project({ project }: { project: ProjectType }) {
  return (
    <div className='mt-[30%] flex max-w-2xl flex-col items-center gap-8 rounded-lg bg-white p-5 shadow-md transition-all sm:mt-8 sm:flex-row sm:p-10'>
      <ProjectImage src={project?.cover as string} alt={project.name} />

      <div className='flex flex-col justify-start gap-3'>
        <h1 className='font-bold text-neutral-900'>{project.name}</h1>
        <p className='line-clamp-5 text-sm text-gray-400'>
          {project.description}
        </p>

        <div className='flex flex-wrap items-center gap-1'>
          {project.tools!.map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-500'
            >
              {tool}
            </span>
          ))}
        </div>

        <div className='mt-auto flex w-fit items-center gap-4 p-2'>
          {project.github && (
            <ProjectLink
              href={project.github}
              title='Source Code on GitHub'
              icon={<Icon name='GitHub' />}
            />
          )}
          {project.preview && (
            <ProjectLink
              href={project.preview}
              title='Live Preview'
              icon={<Icon name='Link' />}
            />
          )}
        </div>
      </div>
    </div>
  )
}
