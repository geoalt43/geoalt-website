'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const SCROLL_POSITION_KEY = 'geoalt-scroll-position'

export function useScrollRestoration() {
  const pathname = usePathname()
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    const isHomePage = pathname === '/'

    if (isHomePage && !hasInitializedRef.current) {
      hasInitializedRef.current = true
      
      const storeScrollPosition = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const link = target.closest('a[href*="privacy-policy"], a[href*="terms-of-service"], a[href*="cookie-policy"]')
        
        if (link) {
          const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
          if (scrollY > 0) {
            sessionStorage.setItem(SCROLL_POSITION_KEY, scrollY.toString())
          }
        }
      }

      document.addEventListener('click', storeScrollPosition, true)

      return () => {
        document.removeEventListener('click', storeScrollPosition, true)
      }
    }

    if (!isHomePage) {
      hasInitializedRef.current = false
    }
  }, [pathname])
}

