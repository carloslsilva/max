import { Blog } from '@lib/blog'
import { type PostMetadata } from '@lib/types'
import Link from 'next/link'

export async function getStaticProps() {
  const posts = await new Blog().getPosts()
  return {
    props: { posts }
  }
}

type Props = {
  posts: PostMetadata[]
}

export default function BlogPage({ posts }: Props) {
  return (
    <>
      {posts.map(post => (
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
