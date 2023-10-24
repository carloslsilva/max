import { Container, Icon } from '@components/common'
import Link from 'next/link'

export const About = () => (
  <Container className='body-font text-gray-600'>
    <div className='container mx-auto flex flex-col'>
      <div className='mx-auto'>
        <div className='mt-10 flex flex-col items-center sm:flex-row'>
          <div className='border-b border-gray-200 text-center sm:w-1/3 sm:border-b-0 sm:border-r sm:py-8 sm:pr-8'>
            <div className='h-25 w-25 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-400'>
              <img
                alt='content'
                className='h-full w-full rounded-full object-cover object-center'
                src='/images/avatar.jpg'
              />
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <h2 className='title-font mb-4 mt-4 text-lg font-medium text-gray-900 sm:mb-0'>
                Carlos Silva
              </h2>
            </div>
          </div>
          <div className='mt-4 text-left sm:mt-0 sm:w-2/3 sm:pl-8'>
            <p className='mb-4 text-lg leading-normal text-gray-500'>
              Electrical Engineer majoring in Electronics with experience in
              firmware development and hardware prototyping. Proficient in C,
              C++, and C#. Knowledgeable in web development using technologies
              such as Node.js and React. Passionate about creating innovative
              and efficient solutions that meet customer needs. A self-motivated
              and dedicated professional, capable of working both in teams and
              independently.
            </p>
            <div className='mt-4 flex w-fit items-center gap-4'>
              <Link
                href='https://github.com/carloslsilva'
                title='Github'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:text-indigo-700'
              >
                <div className='flex h-5 w-5 items-center justify-center transition-all hover:scale-110 active:scale-90'>
                  <Icon name='github' />
                </div>
              </Link>
              <Link
                href='https://www.linkedin.com/in/carloslsilva/'
                title='Linkedin'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:text-indigo-700'
              >
                <div className='flex h-5 w-5 items-center justify-center transition-all hover:scale-110 active:scale-90'>
                  <Icon name='linkedin' />
                </div>
              </Link>
              <Link
                href='https://twitter.com/carloslsilva'
                title='Twitter'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:text-indigo-700'
              >
                <div className='flex h-5 w-5 items-center justify-center transition-all hover:scale-110 active:scale-90'>
                  <Icon name='xtwitter' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)
