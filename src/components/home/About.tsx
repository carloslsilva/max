import { Section, Text, Title } from '@components/common'
import Image from 'next/image'
import avatar from '../../assets/avatar.jpg'

export const About = () => (
  <Section>
    <div className='mt-16 flex flex-col items-center md:flex-row'>
      <div className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
        <Image
          className='rounded-xl  object-cover object-center shadow-2xl'
          alt='hero'
          src={avatar}
        />
      </div>
      <div className='flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
        <Title className='mb-4' as='h1'>
          Carlos Silva
        </Title>
        <Text className='mb-8'>
          Electrical Engineer majoring in Electronics with experience in
          firmware development and hardware prototyping. Proficient in C, C++,
          and C#. Knowledgeable in web development using technologies such as
          Node.js and React. A professional dedicated to creating innovative and
          efficient solutions that meet customer needs. A self-motivated and
          dedicated professional, capable of working both in teams and
          independently.
        </Text>
        {/* <div className='flex justify-center'>
          <button className='inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none'>
            Contact Me!
          </button>
          <button className='ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none'>
            Resume
          </button>
        </div> */}
      </div>
    </div>
  </Section>
)
