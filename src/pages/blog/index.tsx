import { Blog } from '@lib/blog'
import { type PostMetadata } from '@lib/types'
import Link from 'next/link'

type Props = {
  allPosts: PostMetadata[]
}

export default function BlogPage({ allPosts }: Props) {
  return (
    <>
      {allPosts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className='mt-3 flex flex-col'>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const allPosts = new Blog().getPosts()
  return {
    props: { allPosts }
  }
}
