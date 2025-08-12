import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import Tag from '../components/Tag.jsx'
import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects that I loved building">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/80">{p.summary}</p>
              </div>
              <span className="text-xs text-white/60 whitespace-nowrap">{p.period}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
