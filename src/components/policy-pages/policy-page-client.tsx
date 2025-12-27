'use client'

import { useEffect } from 'react'

/**
 * Lightweight client component to hide stars on policy pages
 * Much faster than the previous MutationObserver approach
 * Also ensures page always starts at the top - immediately
 */
export function PolicyPageClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
    
    const stars = document.getElementById('stars')
    const stars2 = document.getElementById('stars2')
    const stars3 = document.getElementById('stars3')
    
    if (stars) stars.style.display = 'none'
    if (stars2) stars2.style.display = 'none'
    if (stars3) stars3.style.display = 'none'
    
    return () => {
      if (stars) stars.style.display = ''
      if (stars2) stars2.style.display = ''
      if (stars3) stars3.style.display = ''
    }
  }, [])

  return null
}

