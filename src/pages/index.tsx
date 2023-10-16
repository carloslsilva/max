import { Project } from '@components/Project'
import { Experience } from '@components/sections'
import { Jobs } from '@lib/jobs'
import { type Job, type Project as ProjectType } from '@lib/types'

export async function getStaticProps() {
  const jobs = await new Jobs().getAll()
  return {
    props: { jobs }
  }
}

type Props = {
  jobs: Job[]
}

export default function HomePage({ jobs }: Props) {
  const project: ProjectType = {
    name: 'test',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur leo id urna congue tempor. Nulla facilisi. Donec nec vulputate elit. Fusce molestie enim nulla, non interdum felis vulputate ac. Cras ac orci erat. Cras sodales erat id efficitur aliquam. Proin luctus posuere turpis non lobortis. Sed nec ipsum et purus hendrerit facilisis vel sit amet magna. Ut interdum nisl ac lorem semper pellentesque.',
    pinned: false,
    tools: ['C', 'C++', 'C#'],
    cover: '/me.jpg',
    github: 'https://github.com/carloslsilva/max',
    preview: 'https://www.google.com'
  }
  return (
    <>
      <Experience jobs={jobs} />
      <div>
        <Project project={project} />
      </div>
    </>
  )
}
