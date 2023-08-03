import { Content } from './content'
import { type Job } from './types'
import { dateToString } from './utils'

export class Jobs {
  constructor() {
    this.jobs = new Content('jobs')
  }

  getAll(): Job[] {
    const allJobs = this.jobs
      .getAll([
        'slug',
        'title',
        'company',
        'location',
        'startDate',
        'endDate',
        'content'
      ])
      .map(job => ({
        title: job.title || job.slug,
        company: job.company || '',
        location: job.location || '',
        startDate: dateToString(new Date(job.startDate ?? null)),
        endDate: job.endDate !== undefined ? job.endDate : null,
        description: job.content || ''
      }))
      .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))

    return allJobs
  }

  private jobs: Content
}
