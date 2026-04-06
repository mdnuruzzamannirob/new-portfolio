import { siteConfig } from '@/lib/seo'
import { MetadataRoute } from 'next'

/**
 * Generate dynamic sitemap for better SEO
 * This helps search engines discover all pages on your site
 * Next.js automatically generates robots.txt based on this
 *
 * Route: /sitemap.xml (automatically generated from this file)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Define all static routes on your portfolio
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage has highest priority
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Projects section changes more frequently
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#education`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Add dynamic project routes
  // TODO: Fetch your projects from your data source (data.ts)
  // and generate routes for each project
  // Example project route:
  // const projectRoutes: MetadataRoute.Sitemap = [
  //   {
  //     url: `${baseUrl}/projects/my-project-slug`,
  //     lastModified: new Date(),
  //     changeFrequency: 'monthly',
  //     priority: 0.8,
  //   },
  // ]

  return staticRoutes
}
