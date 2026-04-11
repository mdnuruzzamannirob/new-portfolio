import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Md. Nuruzzaman - Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Dynamic Open Graph image generation
 * Used as the default OG image for the portfolio
 *
 * This generates a custom image that appears when your portfolio is shared
 * on social media (Twitter, LinkedIn, Facebook, etc.)
 *
 * Route: /opengraph-image.png (automatically generated)
 * Size: 1200x630px (standard OG image size)
 */
export default async function OgImage(): Promise<ImageResponse> {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
      }}
    >
      {/* Main heading */}
      <div
        style={{
          fontSize: '80px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '20px',
          fontFamily: 'system-ui',
        }}
      >
        Md. Nuruzzaman
      </div>

      {/* Subtitle/role */}
      <div
        style={{
          fontSize: '48px',
          color: '#e0e7ff',
          textAlign: 'center',
          marginBottom: '40px',
          fontFamily: 'system-ui',
        }}
      >
        Full-Stack Developer
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: '36px',
          color: '#c7d2fe',
          textAlign: 'center',
          fontFamily: 'system-ui',
          maxWidth: '90%',
        }}
      >
        Building beautiful, production-ready web applications
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
