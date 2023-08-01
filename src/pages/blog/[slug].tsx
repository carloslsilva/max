import Content from '@lib/content'
import { type Post as PostType } from '@lib/types'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

type Props = {
  post: PostType
}

export default function PostPage({ post }: Props) {
  const router = useRouter()
  const title = `${post.title} | Next.js Blog Example with MARKDOWN`

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  } else if (router.isFallback) {
    return <h1>Loading…</h1>
  } else {
    return (
      <>
        <h1>{title}</h1>
        <article className='mx-auto prose prose-lg'>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
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
  const data = new Content('blog').getBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'excerpt',
    'keywords'
  ])

  return {
    props: {
      post: {
        slug: data.slug,
        title: data.title ?? data.slug,
        date: (data.date ?? new Date('2023:01:01')).toString(),
        excerpt: data.excerpt ?? '',
        keywords: data.keywords ?? ''
      }
    }
  }
}

export async function getStaticPaths() {
  const paths = new Content('blog').getAll(['slug']).map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
}
