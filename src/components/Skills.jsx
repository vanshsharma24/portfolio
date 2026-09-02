import { motion } from 'framer-motion'
import { technicalSkills, softSkills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="font-medium text-white/85">{name}</span>
        <span className="text-white/40">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-blue-accent to-cyan-accent"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-navy-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & strengths"
          description="Core web development skills paired with the soft skills that make collaboration effective."
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <SkillBar key={skill.name} index={i} {...skill} />
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Soft Skills</h3>
            <div className="space-y-5">
              {softSkills.map((skill, i) => (
                <SkillBar key={skill.name} index={i} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
