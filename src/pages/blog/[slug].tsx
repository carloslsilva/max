import { Blog } from '@lib/blog'
import { type Post as PostType } from '@lib/types'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

type Props = {
  post: PostType
}

export default function PostPage({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  } else if (router.isFallback) {
    return <h1>Loading…</h1>
  } else {
    return (
      <>
        <main className='container mx-auto'>
          <article className='prose prose-lg mx-auto'>
            <h1>{post.title}</h1>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </main>
        <Link href={'/blog'}>Back</Link>
      </>
    )
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const blog = new Blog()
  const post = await blog.getPost(params.slug)
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const blog = new Blog()
  const slugs = await blog.getSlugs()
  const paths = slugs.map(slug => ({
    params: {
      slug
    }
  }))
  return {
    paths,
    fallback: false
  }
}
