'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type ThemeMode = 'light' | 'dark'
export type ColorTheme = 'blue' | 'green' | 'yellow'

interface ThemeContextType {
  theme: ThemeMode
  colorTheme: ColorTheme
  toggleTheme: () => void
  setColorTheme: (color: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Get theme from HTML element classes (set by inline script before React hydrates)
 * This ensures we read the actual theme applied, not just what localStorage says
 */
const getThemeFromDOM = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/**
 * Get color theme from HTML element classes (set by inline script)
 */
const getColorThemeFromDOM = (): ColorTheme => {
  if (typeof window === 'undefined') return 'blue'
  const html = document.documentElement

  if (html.classList.contains('theme-green')) return 'green'
  if (html.classList.contains('theme-yellow')) return 'yellow'
  return 'blue'
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with safe defaults
  // These will be overridden in useEffect after hydration
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('blue')
  const [isHydrated, setIsHydrated] = useState(false)

  /**
   * After hydration, read theme from DOM (which was set by inline script)
   * This ensures state matches what's already rendered
   */
  useEffect(() => {
    const currentTheme = getThemeFromDOM()
    const currentColor = getColorThemeFromDOM()

    setTheme(currentTheme)
    setColorThemeState(currentColor)
    setIsHydrated(true)
  }, [])

  /**
   * When user changes theme, update DOM and localStorage
   * Only runs after hydration to prevent unnecessary updates
   */
  useEffect(() => {
    if (!isHydrated) return

    const html = document.documentElement

    // Apply theme
    html.classList.toggle('dark', theme === 'dark')

    // Apply color theme
    html.classList.remove('theme-blue', 'theme-green', 'theme-yellow')
    html.classList.add(`theme-${colorTheme}`)

    // Persist to localStorage
    localStorage.setItem('theme', theme)
    localStorage.setItem('colorTheme', colorTheme)
  }, [theme, colorTheme, isHydrated])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const setColorTheme = (color: ColorTheme) => setColorThemeState(color)

  return (
    <ThemeContext.Provider
      value={{ theme, colorTheme, toggleTheme, setColorTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
