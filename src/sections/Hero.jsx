import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiLinkedin, FiFileText } from 'react-icons/fi'
import resume from '../../public/MohanBorle_AI-ML_Resume.pdf'
import profile_image from '../data/profile_img.jpg'
import { profile } from '../data/resume.js'

export default function Hero() {
  return (
    <section id="top" className="pt-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-pink-600/25 to-amber-500/25 blur-3xl" />

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05]"
            >
              <span className="neon-text">{profile.name}</span>
              <div className="mt-2 bg-gradient-to-r from-violet-400 via-cyan-300 to-rose-300 bg-clip-text text-transparent">
                {profile.role}
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-white/80 max-w-prose"
            >
              {profile.summary[0]}
              <br />
              {profile.summary[1]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <FiMail /> Contact
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                <FiLinkedin /> LinkedIn
              </a>
              <a href={resume} target="_blank" rel="noreferrer" className="btn-ghost">
                <FiFileText /> Resume
              </a>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2"><FiMapPin /> {profile.location}</span>
              <a className="hover:text-white" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl glass p-1">
              <div className="h-full w-full rounded-[22px] bg-cover bg-center" style={{
                backgroundImage: `url(${profile_image.src})`,
              }} />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-white/20 bg-white/10 backdrop-blur animate-float-slow" />
            <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full border border-white/20 bg-white/10 backdrop-blur animate-float-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
