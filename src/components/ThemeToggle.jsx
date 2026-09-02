import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/70 hover:text-ink hover:border-accent/40 transition-colors ${className}`}
    >
      {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </button>
  )
}
