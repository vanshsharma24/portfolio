import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineStar } from 'react-icons/hi'
import { education, achievements } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <HiOutlineAcademicCap size={20} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-sm text-ink/60">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
                <HiOutlineStar size={20} />
              </span>
              <h3 className="font-display font-semibold text-ink">Achievements</h3>
            </div>
            <ul className="space-y-2">
              {achievements.map((item) => (
                <li key={item} className="text-sm text-ink/65 flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
