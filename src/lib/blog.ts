import { Content } from '@lib/content'
import { type Post, type PostMetadata } from '@lib/types'

export class Blog {
  constructor() {
    this.blog = new Content('blog')
  }

  getSlugs(): string[] {
    const slugs = this.blog.getAll(['slug']).map(post => post.slug)
    return slugs
  }

  getPosts(): PostMetadata[] {
    const posts = this.blog
      .getAll(['slug', 'title', 'date', 'excerpt', 'keywords'])
      .map(data => this.validate(data))
      .sort((a, b) => (a.date > b.date ? -1 : 1))

    return posts
  }

  getPost(slug: string): Post {
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
      date: (data.date ?? new Date('2023:01:01')).toString(),
      excerpt: data.excerpt ?? '',
      keywords: data.keywords ?? ''
    }
  }

  private blog: Content
}
