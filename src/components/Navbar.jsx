import { useState, useEffect } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import resume from '../../public/MohanBorle_AI-ML_Resume.pdf'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-black/40 backdrop-blur border-b border-white/10' : ''}`}>
      <div className="container-3xl flex h-16 items-center justify-between">
        <a href="#top" className="font-extrabold text-white text-lg sm:text-xl">
          <span className="neon-text">Mohan</span> <span className="text-white/70">Borle</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={resume} target="_blank" className="btn-primary text-sm" rel="noreferrer">
            <FiDownload /> Resume
          </a>
        </nav>
        <button className="md:hidden btn-ghost" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="container-3xl py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href={resume} target="_blank" rel="noreferrer" className="btn-primary w-fit text-sm">
              <FiDownload /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
