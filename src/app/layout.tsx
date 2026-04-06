import { HydrationBoundary } from '@/components/HydrationBoundary'
import { ThemeProvider } from '@/context/ThemeContext'
import { constructMetadata, generateWebsiteSchema } from '@/lib/seo'
import { Baloo_Da_2 } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

/**
 * Optimize font loading to prevent layout shift
 * Subsets are customized for the languages used (Latin + Bengali for this portfolio)
 */
const balooDa2 = Baloo_Da_2({
  variable: '--font-baloo-da-2',
  subsets: ['latin', 'bengali'],
  display: 'swap', // Prevents invisible text flash while font loads
})

/**
 * Root layout metadata
 * These are the base metadata for the entire site, inherited by all routes
 * unless overridden by route-specific metadata
 */
export const metadata = constructMetadata({
  title: 'Full-Stack Developer | Md. Nuruzzaman',
  description:
    'Passionate full-stack developer with 2+ years of experience building production-ready web applications. Specialized in React, Next.js, and modern web development.',
  og: {
    type: 'website',
    title: 'Full-Stack Developer | Md. Nuruzzaman',
    description:
      'Passionate full-stack developer with 2+ years of experience building production-ready web applications.',
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  /**
   * Inline script to prevent theme flash/blink on page load
   * This runs BEFORE React hydrates, preventing hydration mismatch
   * Solves the issue where localStorage theme doesn't match server render
   */
  const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('theme') || 'light';
        const colorTheme = localStorage.getItem('colorTheme') || 'blue';
        const html = document.documentElement;

        // Apply theme classes synchronously
        html.classList.toggle('dark', theme === 'dark');
        html.classList.remove('theme-blue', 'theme-green', 'theme-yellow');
        html.classList.add('theme-' + colorTheme);
      } catch (e) {
        // Silently fail if localStorage is unavailable (private browsing, etc)
      }
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Theme injection script - MUST run before React hydrates
          This prevents the "theme flash" issue where the wrong theme displays briefly
          Script applies classes to <html> before React loads, so suppressHydrationWarning
          on html allows the hydration mismatch for theme classes we handle via script
        */}
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          suppressHydrationWarning
        />

        {/*
          Preconnect to external domains for better performance
          Add preconnect tags for any external APIs or CDNs you use
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/*
          JSON-LD structured data for search engines
          Helps Google understand your site structure and content
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${balooDa2.className} antialiased`}
      >
        <ThemeProvider>
          <HydrationBoundary>{children}</HydrationBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
