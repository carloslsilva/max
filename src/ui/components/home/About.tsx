import avatar from '@/assets/avatar.jpg'
import { Section, Text, Title } from '@/ui/components/common'
import Image from 'next/image'

export const About = () => (
  <Section>
    <div className='mt-16 flex flex-col items-center md:flex-row'>
      <div className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
        <Image
          className='rounded-xl  object-cover object-center shadow-2xl'
          priority={true}
          src={avatar}
          alt='avatar'
        />
      </div>
      <div className='flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
        <Title as='h1'>Carlos Silva</Title>
        <Text variant='bigger'>
          Electrical Engineer majoring in Electronics with experience in
          firmware development and hardware prototyping. Knowledgeable in web
          development using technologies such as React, Next.js and Node.js. A
          professional dedicated to creating innovative and efficient solutions
          that meet customer needs. A self-motivated and dedicated professional,
          capable of working both in teams and independently.
        </Text>
      </div>
    </div>
  </Section>
)
