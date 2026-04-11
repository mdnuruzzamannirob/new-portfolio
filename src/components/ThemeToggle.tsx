'use client'

import { useTheme, type ColorTheme } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

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
          <MdOutlineDarkMode className="size-4 shrink-0" />
        ) : (
          <MdOutlineLightMode className="size-4 shrink-0" />
        )}

        {isDark ? 'Toggle Light' : 'Toggle Dark'}
      </button>
    </div>
  )
}

export default ThemeToggle
