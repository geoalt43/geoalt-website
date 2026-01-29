'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface HashLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function HashLink({ href, children, className, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname()
  const isHash = typeof href === 'string' && href.includes('#')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick()

    if (isHash) {
      const [path, hash] = (href as string).split('#')
      // If we're already on the path, just scroll
      if (pathname === path || (path === '' && pathname === '/')) {
        const element = document.getElementById(hash)
        if (element) {
          e.preventDefault()
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // Update URL without reload
          window.history.pushState(null, '', `#${hash}`)
        }
      }
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
