/**
 * SEO-related TypeScript types
 * Add these to your existing types.d.ts or keep separate
 */

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  author: string
  email: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    github?: string
    medium?: string
  }
  ogImage: {
    url: string
    width: number
    height: number
    alt: string
  }
  keywords: string[]
}

export interface OpenGraphData {
  type?: 'website' | 'article' | 'profile'
  title?: string
  description?: string
  image?: string
  url?: string
}

export interface TwitterCardData {
  card?: 'summary' | 'summary_large_image'
  title?: string
  description?: string
  image?: string
}

export interface ConstructMetadataOptions {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
  og?: OpenGraphData
  twitter?: TwitterCardData
  canonical?: string
}

export interface PersonSchema {
  '@context': 'https://schema.org'
  '@type': 'Person'
  name: string
  description: string
  email: string
  jobTitle: string
  url: string
  image: string
  sameAs: string[]
  knowsAbout: string[]
}

export interface WebsiteSchema {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  description: string
  url: string
  image: string
  author: {
    '@type': 'Person'
    name: string
  }
  potentialAction: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface SoftwareApplicationSchema {
  '@context': 'https://schema.org'
  '@type': 'SoftwareApplication'
  name: string
  description: string
  author: {
    '@type': 'Person'
    name: string
  }
  image: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
  }
}

export interface BreadcrumbItem {
  '@type': 'ListItem'
  position: number
  name: string
  item: string
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: BreadcrumbItem[]
}

export interface LocalBusinessSchema {
  '@context': 'https://schema.org'
  '@type': 'LocalBusiness'
  name: string
  description: string
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  phone: string
  email: string
  url: string
}

export interface ArticleSchema {
  '@context': 'https://schema.org'
  '@type': 'Article'
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    '@type': 'Person'
    name: string
  }
  url: string
}
