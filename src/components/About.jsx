import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { profile, highlights } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const contactItems = [
  { icon: HiOutlineMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: HiOutlinePhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: HiOutlineLocationMarker, label: profile.location, href: null },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About Me" title="Building a foundation as a full-stack developer" />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass-card rounded-2xl p-8"
          >
            <p className="text-ink/70 leading-relaxed">{profile.summary}</p>

            <ul className="mt-6 space-y-3">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-ink/70">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon size={18} />
                  </span>
                  {href ? (
                    <a href={href} className="hover:text-ink transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 grid gap-4"
          >
            {highlights.map((h) => (
              <div key={h.title} className="glass-card rounded-2xl p-6">
                <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                  {h.title}
                </p>
                <p className="mt-2 text-ink/80 font-medium">{h.items}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
