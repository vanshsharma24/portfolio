import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name || 'a visitor'}`
  )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!emailjsConfigured) return

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-bg-soft">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to internships, full-time roles, and collaborative projects. Reach out anytime."
        />

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            {[
              { icon: HiOutlineMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: HiOutlinePhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
              { icon: HiOutlineLocationMarker, label: 'Location', value: profile.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/40">{label}</p>
                  {href ? (
                    <a href={href} className="text-ink/85 hover:text-ink transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-ink/85">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 glass-card rounded-2xl p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-ink/50 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-2.5 text-sm text-ink placeholder-ink/30 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-ink/50 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-2.5 text-sm text-ink placeholder-ink/30 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-ink/50 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..."
                className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-2.5 text-sm text-ink placeholder-ink/30 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {emailjsConfigured ? (
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent hover:bg-accent/90 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-lg shadow-glow/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            ) : (
              <a
                href={mailtoHref}
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent hover:bg-accent/90 px-5 py-3 text-sm font-semibold text-white transition-colors shadow-lg shadow-glow/20"
              >
                Send Message
              </a>
            )}

            {status === 'success' && (
              <p className="text-sm text-emerald-400 text-center">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400 text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
