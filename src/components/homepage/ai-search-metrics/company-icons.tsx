'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

interface CompanyIconProps {
  size?: number
  className?: string
}

function useIsLightTheme() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return mounted && resolvedTheme === 'light'
}

export const AsanaIcon = ({ size = 20, className = '' }: CompanyIconProps) => {
  const isLight = useIsLightTheme()
  return (
    <Image
      src="/images/asanas.png"
      alt="Asana logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={isLight ? { filter: 'brightness(0)' } : undefined}
      unoptimized
    />
  )
}

export const TrelloIcon = ({ size = 20, className = '' }: CompanyIconProps) => {
  const isLight = useIsLightTheme()
  return (
    <Image
      src="/images/trello_.png"
      alt="Trello logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={isLight ? { filter: 'brightness(0)' } : undefined}
      unoptimized
    />
  )
}

export const MondayIcon = ({ size = 20, className = '' }: CompanyIconProps) => {
  const isLight = useIsLightTheme()
  return (
    <Image
      src="/images/mondayy.png"
      alt="Monday.com logo"
      width={size}
      height={size}
      className={`${className} object-contain`}
      style={isLight ? { filter: 'brightness(0)' } : undefined}
      unoptimized
    />
  )
}


