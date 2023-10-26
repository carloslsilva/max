import { Section, Text } from '@components/common'
import { FC } from 'react'

export const Contact: FC = () => (
  <Section title='Contact'>
    <div className='mx-auto md:w-2/3 lg:w-1/2'>
      <Text className='mb-4'>
        Interested in working together? Let&apos;s talk!
      </Text>
      <div className='-m-2 flex flex-wrap'>
        <div className='w-1/2 p-2'>
          <div className='relative'>
            <label
              htmlFor='name'
              className='text-sm leading-7 text-primary-600'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200'
            />
          </div>
        </div>
        <div className='w-1/2 p-2'>
          <div className='relative'>
            <label
              htmlFor='email'
              className='text-sm leading-7 text-primary-600'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-primary-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200'
            />
          </div>
        </div>
        <div className='w-full p-2'>
          <div className='relative'>
            <label
              htmlFor='message'
              className='text-sm leading-7 text-primary-600'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-primary-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200'
              defaultValue={''}
            />
          </div>
        </div>
        <div className='w-full p-2'>
          <button className='mx-auto flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none'>
            Submit
          </button>
        </div>
      </div>
    </div>
  </Section>
)
