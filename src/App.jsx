import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Certifications from './sections/Certifications.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  useEffect(() => {
    // Enable smooth scroll behavior for hash links
    if ('scrollBehavior' in document.documentElement.style) return
    import('smoothscroll-polyfill').then(({ default: polyfill }) => polyfill?.())
  }, [])

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 backdrop-grid bg-grid opacity-[0.06]" aria-hidden />
      <Navbar />
      <main className="container-3xl space-y-28 sm:space-y-32 md:space-y-36">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App
