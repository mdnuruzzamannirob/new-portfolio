'use client'

import { useTheme, type ColorTheme } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'

const colorOptions: {
  key: ColorTheme
  label: string
  bg: string
  ring: string
}[] = [
  { key: 'blue', label: 'Blue', bg: 'bg-blue-500', ring: 'ring-blue-400' },
  { key: 'green', label: 'Green', bg: 'bg-green-500', ring: 'ring-green-400' },
  {
    key: 'yellow',
    label: 'Yellow',
    bg: 'bg-yellow-400',
    ring: 'ring-yellow-300',
  },
]

const ThemeToggle = () => {
  const [isMounted, setMounted] = useState(false)
  const { theme, colorTheme, toggleTheme, setColorTheme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="flex justify-between items-center gap-4 sm:gap-6">
      {/* Color theme swatches */}
      <div className="flex items-center gap-2.5" aria-label="Color theme">
        {colorOptions.map(({ key, label, bg, ring }) => (
          <button
            key={key}
            onClick={() => setColorTheme(key)}
            aria-label={`${label} theme`}
            title={`${label} theme`}
            className={`size-4 shrink-0 rounded-full ${bg} transition-all cursor-pointer ${
              colorTheme === key
                ? `ring-2 ring-offset-2 ${ring} ring-offset-background scale-110`
                : 'opacity-50 hover:opacity-100'
            }`}
          />
        ))}
      </div>

      {/* Dark / Light toggle button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary-hover transition-colors cursor-pointer"
      >
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3.5 h-3.5"
          >
            <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.061l1.061-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.061ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3.5 h-3.5"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
              clipRule="evenodd"
            />
          </svg>
        )}

        {isDark ? 'Toggle Light' : 'Toggle Dark'}
      </button>
    </div>
  )
}

export default ThemeToggle
