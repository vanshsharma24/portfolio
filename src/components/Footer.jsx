import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const socials = [
    profile.socials.github && { icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
    profile.socials.linkedin && { icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
    profile.socials.twitter && { icon: FiTwitter, href: profile.socials.twitter, label: 'Twitter' },
    { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
  ].filter(Boolean)

  return (
    <footer className="border-t border-ink/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 hover:text-ink hover:bg-accent/20 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
