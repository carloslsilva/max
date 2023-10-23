import { Icon } from '@components/common'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto flex flex-col px-5 py-24'>
          <div className='mx-auto lg:w-4/6'>
            <div className='mt-10 flex flex-col items-center sm:flex-row'>
              <div className='text-center sm:w-1/3 sm:py-8 sm:pr-8'>
                <div className='h-21 w-21 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-400'>
                  <img
                    alt='content'
                    className='h-full w-full rounded-full object-cover object-center'
                    src='/images/avatar.jpg'
                  />
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                  <h2 className='title-font mt-4 text-lg font-medium text-gray-900'>
                    Carlos Silva
                  </h2>
                  <div className='mb-2 mt-2 h-1 w-12 rounded bg-indigo-500' />
                  <p className='text-base'>Electrical Engineer</p>
                </div>
              </div>
              <div className='mt-4 border-t border-gray-200 pt-4 text-left sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8'>
                <p className='mb-4 text-lg leading-normal text-gray-500'>
                  Electrical Engineer majoring in Electronics with experience in
                  firmware development and hardware prototyping. Proficient in
                  C, C++, and C#. Knowledgeable in web development using
                  technologies such as Node.js and React. Passionate about
                  creating innovative and efficient solutions that meet customer
                  needs. A self-motivated and dedicated professional, capable of
                  working both in teams and independently.
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
      </section>
    </>
  )
}
