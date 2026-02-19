'use client'

import Image from 'next/image'

interface CompanyIconProps {
  size?: number
  className?: string
}

export const AsanaIcon = ({ className = '' }: CompanyIconProps) => {
  return (
    <Image
      src="/images/asanas.png"
      alt="Asana logo"
      width={100}
      height={100}
      className={`${className} object-contain brightness-0 dark:brightness-100`}
    />
  )
}

export const TrelloIcon = ({ className = '' }: CompanyIconProps) => {
  return (
    <Image
      src="/images/trello_.png"
      alt="Trello logo"
      width={100}
      height={100}
      className={`${className} object-contain brightness-0 dark:brightness-100`}
    />
  )
}

export const MondayIcon = ({ className = '' }: CompanyIconProps) => {
  return (
    <Image
      src="/images/mondayy.png"
      alt="Monday.com logo"
      width={100}
      height={100}
      className={`${className} object-contain brightness-0 dark:brightness-100`}
    />
  )
}
