/**
 * JsonLd Component
 * Reusable component for injecting JSON-LD structured data into the page
 * Used for rich snippets in search results (Person, Website, Project schemas, etc.)
 *
 * Usage:
 * <JsonLd data={generatePersonSchema()} />
 */

interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

/**
 * Alternative: Schema.org Organization schema
 * Useful if you want to represent your portfolio as representing an organization
 */
export function OrganizationSchema({
  name,
  description,
  url,
  logo,
  sameAs,
}: {
  name: string
  description: string
  url: string
  logo: string
  sameAs: string[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo,
    sameAs,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

/**
 * Local Business Schema
 * Use if you offer services/products locally
 */
export function LocalBusinessSchema({
  name,
  description,
  address,
  phone,
  email,
  url,
}: {
  name: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  phone: string
  email: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    phone,
    email,
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

/**
 * Article Schema
 * Use for blog posts or articles in your portfolio
 */
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
