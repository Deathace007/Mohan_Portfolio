import { FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'
import resume from '../../public/MohanBorle_AI-ML_Resume.pdf'
import { profile } from '../data/resume.js'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/30">
      <div className="container-3xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-ghost text-sm"><FiMail /> Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-sm"><FiLinkedin /> LinkedIn</a>
          <a href={resume} target="_blank" rel="noreferrer" className="btn-primary text-sm"><FiFileText /> Resume</a>
        </div>
      </div>
    </footer>
  )
}
