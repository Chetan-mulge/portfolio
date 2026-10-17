import type { Education, Job } from './types'
import json from './data/experience.json' with { type: 'json' }

const data = json as unknown as {
  jobs: Job[]
  education: Education[]
  awards: { title: string; event: string }[]
}

export const jobs: readonly Job[] = data.jobs
export const education: readonly Education[] = data.education
export const awards: readonly { title: string; event: string }[] = data.awards