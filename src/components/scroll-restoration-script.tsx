'use client'

import { useLayoutEffect } from 'react'

const SCROLL_POSITION_KEY = 'geoalt-scroll-position'

/**
 * Enterprise-level scroll restoration component
 * Uses useLayoutEffect for synchronous execution before browser paint
 * Prevents visible jump when navigating back from policy pages
 */
export function ScrollRestorationScript() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY)
      
      if (!savedPosition) return

      const position = parseInt(savedPosition, 10)
      if (isNaN(position) || position <= 0) return

      const referrer = document.referrer || ''
      const isFromPolicyPage = 
        referrer.includes('privacy-policy') || 
        referrer.includes('terms-of-service') || 
        referrer.includes('cookie-policy')
      
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
      const isBackNavigation = navigationEntry?.type === 'back_forward'

      if (!isFromPolicyPage && !isBackNavigation) return

      const html = document.documentElement
      const body = document.body
      const originalHtmlScrollBehavior = html.style.scrollBehavior
      const originalBodyScrollBehavior = body?.style.scrollBehavior

      html.style.scrollBehavior = 'auto'
      if (body) body.style.scrollBehavior = 'auto'

      window.scrollTo(0, position)
      html.scrollTop = position
      if (body) body.scrollTop = position

      sessionStorage.removeItem(SCROLL_POSITION_KEY)

      html.style.scrollBehavior = originalHtmlScrollBehavior || ''
      if (body) body.style.scrollBehavior = originalBodyScrollBehavior || ''
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Scroll restoration error:', error)
      }
    }
  }, [])

  return null
}

