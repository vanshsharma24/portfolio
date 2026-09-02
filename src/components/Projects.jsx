import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { HiOutlineClipboardCheck, HiOutlineCash } from 'react-icons/hi'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const icons = [HiOutlineClipboardCheck, HiOutlineCash]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Hands-on projects applying core JavaScript concepts and front-end fundamentals."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 flex flex-col hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-medium text-ink/40">{project.date}</span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{project.description}</p>

                <ul className="mt-4 space-y-2 flex-1">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-ink/60 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-ink/70 bg-ink/5 border border-ink/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <a
                    href={project.repoUrl || '#'}
                    className="inline-flex items-center gap-1.5 text-ink/70 hover:text-ink transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.liveUrl || '#'}
                    className="inline-flex items-center gap-1.5 text-ink/70 hover:text-ink transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
