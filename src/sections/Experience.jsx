import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import Tag from '../components/Tag.jsx'
import { experience } from '../data/resume.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="grid gap-6">
        {experience.map((e) => (
          <Card key={e.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold">{e.role}</h3>
                <div className="text-white/70">{e.company}</div>
              </div>
              <div className="text-sm text-white/60">{e.period}</div>
            </div>
            <ul className="mt-3 list-disc list-inside space-y-1 text-white/85">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
