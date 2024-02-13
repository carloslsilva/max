import type { Bio } from '@/lib/types'
import Image from 'next/image'
import { FC } from 'react'
import Markdown from 'react-markdown'
import { ContactButton } from '../ContactButton'
import { ResumeButton } from '../ResumeButton'
import { Section, Text, Title } from '../common'

type Props = {
  bio: Bio
}

export const About: FC<Props> = ({ bio }) => (
  <Section>
    <div className='mt-16 flex flex-col items-center gap-10 md:flex-row md:gap-10 lg:gap-24'>
      <div className='w-5/6 md:w-4/6 lg:w-full lg:max-w-lg'>
        <Image
          className='rounded-xl object-cover object-center shadow-2xl'
          priority={true}
          width={960}
          height={960}
          src='/avatar.jpg'
          alt='avatar'
        />
      </div>
      <div className='flex flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left lg:flex-grow'>
        <Title as='h1'>{bio.name}</Title>
        <Markdown
          components={{
            p(props) {
              return <Text variant='bigger'>{props.children}</Text>
            }
          }}
        >
          {bio.resume}
        </Markdown>
        <div className='mt-4 flex justify-center gap-4 lg:mt-6'>
          <ContactButton />
          <ResumeButton />
        </div>
      </div>
    </div>
  </Section>
)
