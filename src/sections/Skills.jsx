import Section from '../components/Section.jsx'
import Tag from '../components/Tag.jsx'
import Card from '../components/Card.jsx'
import { skills } from '../data/resume.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills & Tooling">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.category}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <div className="h-px flex-1 mx-4 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
