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
  return (
    <html lang="en">
      <head>
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
