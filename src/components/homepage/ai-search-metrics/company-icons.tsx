'use client'

import Image from 'next/image'

interface CompanyIconProps {
  size?: number
  className?: string
}

export const AsanaIcon = ({ size = 20, className = '' }: CompanyIconProps) => {
  return (
    <Image
      src="/images/asanas.png"
      alt="Asana logo"
      width={size}
      height={size}
      className={`${className} object-contain brightness-0 dark:brightness-100`}
    />
  )
}

export const TrelloIcon = ({ size = 20, className = '' }: CompanyIconProps) => {
  return (
    <Image
      src="/images/trello_.png"
      alt="Trello logo"
      width={size}
      height={size}
      className={`${className} object-contain brightness-0 dark:brightness-100`}
    />
  )
}

export const MondayIcon = ({ size = 20, className = '' }: CompanyIconProps) => {
  return (
    <Image
      src="/images/mondayy.png"
      alt="Monday.com logo"
      width={size}
      height={size}
      className={`${className} object-contain brightness-0 dark:brightness-100`}
    />
  )
}
