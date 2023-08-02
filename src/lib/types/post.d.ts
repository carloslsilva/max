export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  keywords: string
  content: string
}

export type PostMetadata = Omit<Post, 'content'>
