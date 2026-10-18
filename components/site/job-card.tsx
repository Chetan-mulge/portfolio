
'use client'

import { useId, useState } from 'react'

import { site } from '@/content'
import { rich } from '@/lib/rich'

export function JobCard({
  slug,
  period,
  place,
  role,
  company,
  lede,
  highlights,
  stack,
}: {
  slug: string
  period: string
  place: string
  role: string
  company: string
  lede: string
  highlights: readonly string[]
  stack: readonly string[]
}) {
  const [open, setOpen] = useState(false)
  const bodyId = useId()

  return (
    <article
      className="job reveal"
      id={`job-${slug}`}
      data-job
      data-open={open ? '1' : '0'}
    >
      <p className="job__when">
        <b>{period}</b>
        {place}
      </p>

      <h3>
        <button
          type="button"
          className="job__toggle"
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => setOpen((o) => !o)}
        >
          <span>
            {role} <span className="job__at">— {company}</span>
          </span>
          <span className="job__chev" aria-hidden />
          <span className="job__sr">
            {open ? site.experience.collapse : site.experience.expand}
          </span>
        </button>
      </h3>

      <div className="job__body" id={bodyId}>
        <p className="job__lede">{rich(lede)}</p>

        <ul className="job__points">
          {highlights.map((h, i) => (
            <li key={i}>{rich(h)}</li>
          ))}
        </ul>

        

         
        <div className="s-chips">
          {stack.map((t) => (
            <span className="s-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
