import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import { education } from '../data/resume.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((ed) => (
          <Card key={ed.degree}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{ed.degree}</h3>
                <p className="text-white/75">{ed.school}</p>
                {ed.meta && <p className="text-white/60 text-sm mt-1">{ed.meta}</p>}
              </div>
              <span className="text-xs text-white/60 whitespace-nowrap">{ed.period}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
