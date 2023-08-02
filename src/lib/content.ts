import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export class Content {
  constructor(contentDirectrory: string) {
    this.contentDirectory = path.join(
      process.cwd(),
      'src',
      'content',
      contentDirectrory
    )
  }

  getAll(fields: string[] = []) {
    const slugs = this.getSlugs()
    const contents = slugs.map(slug => this.getBySlug(slug, fields))
    return contents
  }

  getBySlug(slug: string, fields: string[] = []) {
    const fullPath = path.join(this.contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const request: {
      [key: string]: string
    } = {}

    fields.forEach(field => {
      if (field === 'slug') {
        request[field] = slug
      }
      if (field === 'content') {
        request[field] = content
      }
      if (typeof data[field] !== 'undefined') {
        if (data[field] instanceof Date) {
          request[field] = data[field].toISOString().slice(0, 19)
        } else {
          request[field] = data[field]
        }
      }
    })

    return request
  }

  private getSlugs() {
    try {
      const slugs = fs
        .readdirSync(this.contentDirectory)
        .filter(file => /.md$/.test(file))
        .map(file => file.replace(/.md$/, ''))
      return slugs
    } catch {
      return []
    }
  }

  private contentDirectory: string
}
