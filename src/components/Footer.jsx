import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    profile.socials.github && { icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
    profile.socials.linkedin && { icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    profile.socials.twitter && { icon: FiTwitter, href: profile.socials.twitter, label: 'Twitter' },
    { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
  ].filter(Boolean)

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/40">
          &copy; {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-blue-accent/20 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
