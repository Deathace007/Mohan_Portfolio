import {useState, useEffect} from 'react'
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Tag from "../components/Tag.jsx";
import { getProjects } from "../api/projects.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    getProjects().then((data)=>{
      setProjects(data)
    })
  },[]);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects that I loved building"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.Project_Name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{p.Project_Name}</h3>
                <p className="mt-2 text-sm text-white/80">{p.Description}</p>
              </div>
              {/* <span className="text-xs text-white/60 whitespace-nowrap">
                {p.period}
              </span> */}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.Language.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
              
            {p.Link && <Tag key={p.Link}><a
                href={p.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 block"
              >
                View Project
              </a></Tag>}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
