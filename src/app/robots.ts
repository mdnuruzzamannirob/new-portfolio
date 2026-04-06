import { siteConfig } from '@/lib/seo'
import { MetadataRoute } from 'next'

/**
 * Generate robots.txt for SEO
 * This file tells search engine crawlers what they can and cannot crawl
 *
 * Route: /robots.txt (automatically generated from this file)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Rules for all robots (Googlebot, Bingbot, etc.)
        allow: '/', // Allow crawling all pages
        disallow: [
          '/api/', // Disallow API routes (usually called programmatically)
          '/*.json$', // Disallow JSON files
          '/*?*sort=', // Disallow sorted/filtered views if applicable
        ],
      },
      {
        // Specific rules for Google's bot if needed
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0, // No delay for Googlebot
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`, // Reference to sitemap for search engines
    host: siteConfig.url,
  }
}
