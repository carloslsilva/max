import { Jobs } from '@lib/jobs'
import { type Job as JobType } from '@lib/types'
import ReactMarkdown from 'react-markdown'

type Props = {
  allJobs: JobType[]
}

export default function HomePage(props: Props) {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='max-w-2xl rounded-lg bg-white p-8 sm:shadow-xl'>
          <h1 className='mb-4 text-3xl font-bold text-gray-500'>
            Carlos Silva
          </h1>
          <h2 className='mb-0 text-xl font-semibold text-gray-500'>
            Ingeniero Electricista
          </h2>
          <h3 className='mb-4 text-lg font-semibold italic text-gray-400'>
            Desarrollador de Firmware y Front-end
          </h3>
          <p className='mb-4 text-gray-600'>
            Ingeniero Electricista especializado en Electrónica con experiencia
            en desarrollo de firmware y prototipado de hardware. Experto en C,
            C++ y C#. Con conocimientos en desarrollo web utilizando tecnologías
            como Node.js, React. Apasionado por crear soluciones innovadoras y
            eficientes que satisfagan las necesidades del cliente. Profesional
            autónomo y dedicado, capaz de trabajar tanto en equipo como de
            manera independiente.
          </p>
          <a
            href='https://www.linkedin.com/in/carloslsilva/'
            className='text-blue-500 hover:underline'
          >
            LinkedIn
          </a>
        </div>
      </div>
      {props.allJobs.map(job => (
        <div key={job.title} className='mt-3 flex flex-col'>
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          <p>{job.location}</p>
          <ReactMarkdown>{job.description}</ReactMarkdown>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const allJobs = new Jobs().getAll()
  console.log(allJobs)
  return {
    props: { allJobs }
  }
}
