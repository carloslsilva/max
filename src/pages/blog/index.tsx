import Content from '@lib/content'
import { Post as PostType } from '@lib/types'
import Link from 'next/link'

type Props = {
  allPosts: Omit<PostType, 'content'>[]
}

export default function BlogPage({ allPosts }: Props) {
  return (
    <>
      {allPosts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const allPosts = new Content('blog')
    .getAll(['slug', 'title', 'date', 'excerpt', 'keywords'])
    .map(data => ({
      slug: data.slug,
      title: data.title ?? data.slug,
      date: (data.date ?? new Date('2023:01:01')).toString(),
      excerpt: data.excerpt ?? '',
      keywords: data.keywords ?? ''
    }))

  return {
    props: { allPosts }
  }
}
