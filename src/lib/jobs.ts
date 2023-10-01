import { Content } from './content'
import { type Job } from './types'

export class Jobs {
  constructor() {
    this.jobs = new Content('jobs')
  }

  async getAll(): Promise<Job[]> {
    const allJobs = this.jobs
      .getAll([
        'title',
        'company',
        'location',
        'startDate',
        'endDate',
        'content',
        'tech'
      ])
      .map(job => ({
        title: (job.title as string) || '',
        company: (job.company as string) || '',
        location: (job.location as string) || '',
        startDate: new Date(job.startDate ?? null).toISOString(),
        endDate: job.endDate ? new Date(job.endDate).toISOString() : null,
        description: (job.content as string) || '',
        tech: job.tech ? (job.tech as string[]) : []
      }))
      .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))

    console.log(allJobs)

    return allJobs
  }

  private jobs: Content
}
