import { Job } from './types'

export const sortJobs = (unsortedJobs: Job[]) =>
  unsortedJobs.sort((a, b) => {
    if (a.endDate === null && b.endDate === null) {
      return (new Date(b.startDate) as any) - (new Date(a.startDate) as any)
    } else if (a.endDate === null) {
      return -1
    } else if (b.endDate === null) {
      return 1
    } else {
      return (new Date(b.endDate) as any) - (new Date(a.endDate) as any)
    }
  })
