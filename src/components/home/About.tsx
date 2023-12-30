import Image from 'next/image'
import { ContactButton } from '../ContactButton'
import { ResumeButton } from '../ResumeButton'
import { Section, Text, Title } from '../common'

export const About = () => (
  <Section>
    <div className='mt-16 flex flex-col items-center md:flex-row'>
      <div className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
        <Image
          className='rounded-xl object-cover object-center shadow-2xl'
          priority={true}
          width={960}
          height={960}
          src='/avatar.jpg'
          alt='avatar'
        />
      </div>
      <div className='flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
        <Title as='h1'>Carlos Silva</Title>
        <Text variant='bigger'>
          I am an Electrical Engineering major in Electronics, with experience
          in software development and embedded systems. I have expertise in web
          development using technologies such as React, Next.js, and Node.js. I
          am a dedicated professional committed to creating innovative and
          efficient solutions that meet customer needs.
        </Text>
        <div className='mt-6 flex justify-center gap-4'>
          <ContactButton />
          <ResumeButton />
        </div>
      </div>
    </div>
  </Section>
)
