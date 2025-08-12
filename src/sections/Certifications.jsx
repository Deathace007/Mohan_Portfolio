import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import { certifications } from '../data/resume.js'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Proof of learning" title="Certifications">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <Card key={c.name}>
            <h3 className="text-lg font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm text-white/80">{c.details}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
