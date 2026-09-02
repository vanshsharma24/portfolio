import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { experience } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Internship" />

        <div className="relative border-l border-white/10 pl-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-4"
            >
              <span className="absolute -left-[38px] flex h-8 w-8 items-center justify-center rounded-full bg-blue-accent text-white ring-4 ring-navy-950">
                <HiOutlineBriefcase size={16} />
              </span>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs font-medium text-blue-accent bg-blue-accent/10 rounded-full px-3 py-1">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-white/65 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
