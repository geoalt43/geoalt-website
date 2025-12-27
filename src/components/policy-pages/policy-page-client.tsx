'use client'

import { useEffect } from 'react'

/**
 * Lightweight client component to hide stars on policy pages
 * Much faster than the previous MutationObserver approach
 */
export function PolicyPageClient() {
  useEffect(() => {
    // Hide stars elements (simple and fast)
    const stars = document.getElementById('stars')
    const stars2 = document.getElementById('stars2')
    const stars3 = document.getElementById('stars3')
    
    if (stars) stars.style.display = 'none'
    if (stars2) stars2.style.display = 'none'
    if (stars3) stars3.style.display = 'none'
    
    return () => {
      // Restore on unmount
      if (stars) stars.style.display = ''
      if (stars2) stars2.style.display = ''
      if (stars3) stars3.style.display = ''
    }
  }, [])

  return null
}

