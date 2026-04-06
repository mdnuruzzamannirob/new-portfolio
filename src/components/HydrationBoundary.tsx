'use client'

import { ReactNode, useEffect, useState } from 'react'

/**
 * HydrationBoundary Component
 * Shows a loading state while React hydrates, preventing layout shifts
 * Once hydration is complete, shows actual content
 *
 * This ensures theme is applied before any content renders
 * Prevents the "header disappears and comes back" issue
 */
export function HydrationBoundary({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Mark as hydrated after React hydration complete
    setIsHydrated(true)
  }, [])

  // During SSR and initial hydration: show nothing (theme script handles it)
  // After hydration: show actual content
  if (!isHydrated) {
    return null // Don't render anything during hydration to prevent layout shift
  }

  return <>{children}</>
}
