import { AsanaIcon, TrelloIcon, MondayIcon } from './company-icons'

interface CompanyNameProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

const sizeClasses = {
  sm: { icon: 65 },
  md: { icon: 32 },
  lg: { icon: 70 },
}

export function CompanyName({ name, size = 'md', showIcon = true }: CompanyNameProps) {
  const sizeClass = sizeClasses[size]

  const getIcon = () => {
    if (!showIcon) return null
    const iconProps = {
      size: sizeClass.icon,
      className: 'flex-shrink-0',
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

