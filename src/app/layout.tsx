import { ThemeProvider } from '@/context/ThemeContext'
import type { Metadata } from 'next'
import { Baloo_Da_2 } from 'next/font/google'
import './globals.css'

const balooDa2 = Baloo_Da_2({
  variable: '--font-baloo-da-2',
  subsets: ['latin', 'bengali'],
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${balooDa2.className} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
