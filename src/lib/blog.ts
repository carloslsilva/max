import { Content } from './content'
import { type Post, type PostMetadata } from './types'

export class Blog {
  constructor() {
    this.blog = new Content('blog')
  }

  async getSlugs(): Promise<string[]> {
    const slugs = this.blog.getAll(['slug']).map(post => post.slug)
    return slugs
  }

  async getPosts(): Promise<PostMetadata[]> {
    const posts = this.blog
      .getAll(['slug', 'title', 'date', 'excerpt', 'keywords'])
      .map(data => this.validate(data))
      .sort((a, b) => (a.date > b.date ? -1 : 1))

    return posts
  }

  async getPost(slug: string): Promise<Post> {
    const data = this.blog.getBySlug(slug, [
      'slug',
      'title',
      'date',
      'excerpt',
      'keywords',
      'content'
    ])

    const post = {
      ...this.validate(data),
      content: data.content ?? ''
    }

    return post
  }

  private validate(data: { [key: string]: string }): PostMetadata {
    return {
      slug: data.slug,
      title: data.title ?? data.slug,
      date: data.date ?? '2023:01:01',
      excerpt: data.excerpt ?? '',
      keywords: data.keywords ?? ''
    }
  }

  private blog: Content
}
