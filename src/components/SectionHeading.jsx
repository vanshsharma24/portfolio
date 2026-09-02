import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">{title}</h2>
      {description && <p className="mt-4 text-ink/60 leading-relaxed">{description}</p>}
    </motion.div>
  )
}
