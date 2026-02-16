import { AsanaIcon, TrelloIcon, MondayIcon } from './company-icons'

interface CompanyNameProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

const sizeClasses = {
  sm: { icon: 20 },
  md: { icon: 32 },
  lg: { icon: 56 },
}

export function CompanyName({ name, size = 'md', showIcon = true }: CompanyNameProps) {
  const sizeClass = sizeClasses[size]

  const getIcon = () => {
    if (!showIcon) return null
    const iconProps = {
      size: sizeClass.icon,
      className: 'flex-shrink-0 w-12 h-12 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-14 lg:h-14',
    }
    switch (name) {
      case 'Asana':
        return <AsanaIcon {...iconProps} />
      case 'Trello':
        return <TrelloIcon {...iconProps} />
      case 'Monday.com':
        return <MondayIcon {...iconProps} />
      default:
        return null
    }
  }

  return (
    <div className="flex items-center">
      {getIcon()}
    </div>
  )
}

