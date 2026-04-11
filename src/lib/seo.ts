import { Metadata, Viewport } from 'next'

/**
 * Site Configuration
 * Update these values with your actual portfolio information
 */
export const siteConfig = {
  name: 'Md. Nuruzzaman',
  title: 'Full-Stack Developer | Portfolio',
  description:
    'Passionate full-stack developer with 2+ years of experience building production-ready web applications. Specialized in frontend development with growing expertise in full-stack development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mdnuruzzamannirob.me/',
  author: 'Md. Nuruzzaman',
  email: 'dev.mdnuruzzaman@gmail.com',
  socialLinks: {
    twitter: 'https://x.com/mdnuruzzamandev',
    linkedin: 'https://linkedin.com/in/mdnuruzzamannirob4',
    github: 'https://github.com/mdnuruzzamannirob',
    medium: 'https://medium.com/@mdnuruzzamannirob',
    instagram: 'https://instagram.com/mdnuruzzamannirobdev',
    facebook: 'https://facebook.com/mdnuruzzamannirobdev',
  },
  ogImage: {
    url: 'https://mdnuruzzamannirob.me/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Md. Nuruzzaman - Full-Stack Developer',
  },
  keywords: [
    // --- Identity & Personal Branding ---
    'Md. Nuruzzaman',
    'Md. Nuruzzaman Nirob',
    'Nirob Developer',
    'Full-Stack Engineer',
    'Software Engineer Bangladesh',
    'Web developer in Bangladesh',

    // --- Core Tech Stack (Specific & Trending) ---
    'React.js Developer',
    'Next.js 14 Developer',
    'TypeScript Expert',
    'Modern JavaScript (ES6+)',
    'Node.js Backend Developer',
    'MERN Stack Developer',
    'Tailwind CSS Professional',
    'Prisma ORM',
    'PostgreSQL & MongoDB',
    'State Management (Redux/Zustand)',

    // --- Expert Skills & Services ---
    'Web Application Development',
    'Scalable Web Applications',
    'Serverless Architecture',
    'API Design & Integration',
    'Performance Optimization',
    'Responsive UI/UX Implementation',
    'SaaS Development',
    'Clean Code Architecture',
    'Building Production-Ready Apps',

    // --- Portfolio & Career Focused ---
    'Developer Portfolio',
    'Software Engineer Portfolio',
    'Frontend Developer Portfolio',
    'Next.js Developer Portfolio',
    'Remote Web Developer',
    'Freelance Full-Stack Developer',
    'Web Development Services',
  ],
}

/**
 * Construct absolute URL
 * Useful for canonical URLs, sitemap entries, and structured data
 */
export function getAbsoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`
}

interface ConstructMetadataOptions {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
  og?: {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
    title?: string
    description?: string
    image?: string
  }
  canonical?: string
}

/**
 * Helper function to construct metadata object
 * Centralizes metadata creation and ensures consistency across pages
 *
 * @param options - Partial metadata options to override defaults
 * @returns Complete Metadata object ready for export
 */
export function constructMetadata(
  options: ConstructMetadataOptions = {},
): Metadata {
  const title = options.title ? `${options.title}` : siteConfig.title
  const description = options.description || siteConfig.description
  const image = options.image || siteConfig.ogImage.url
  const canonical = options.canonical || getAbsoluteUrl('/')

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.author,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: options.og?.type || 'website',
      locale: 'en_US',
      url: options.og?.url || canonical,
      siteName: siteConfig.name,
      title: options.og?.title || title,
      description: options.og?.description || description,
      images: [
        {
          url: options.og?.image || image,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: siteConfig.ogImage.alt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: options.twitter?.card || 'summary_large_image',
      title: options.twitter?.title || title,
      description: options.twitter?.description || description,
      images: options.twitter?.image || image,
      creator: siteConfig.socialLinks.twitter
        ? `@${siteConfig.socialLinks.twitter}`
        : undefined,
    },
  }
}

/**
 * Generate structured data helpers
 * These help create JSON-LD schemas for rich snippets
 */

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    description: siteConfig.description,
    email: siteConfig.email,
    jobTitle: 'Full-Stack Developer & Software Engineer',
    url: siteConfig.url,
    image: siteConfig.ogImage.url,
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Bangladesh',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Sparktech Agency',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Betopia Group',
      },
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'Bangladesh',
        },
      },
    },
    knowsAbout: [
      'React.js',
      'Next.js 14',
      'TypeScript',
      'JavaScript (ES6+)',
      'Node.js',
      'MERN Stack',
      'Tailwind CSS',
      'Prisma ORM',
      'PostgreSQL',
      'MongoDB',
      'State Management (Redux/Zustand)',
      'API Design & Integration',
      'Full-Stack Web Development',
      'Scalable Web Applications',
      'Serverless Architecture',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage.url,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

interface ProjectSchemaInput {
  name: string
  description: string
  image?: string
  url?: string
  github?: string
  technologies: string[]
}

export function generateProjectSchema(project: ProjectSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    image: project.image || siteConfig.ogImage.url,
    url: project.url || getAbsoluteUrl('/'),
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

/**
 * Generate breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Viewport configuration
 * Defines how the page should be displayed on different devices
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}
