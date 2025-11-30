import { AsanaIcon, TrelloIcon, MondayIcon } from './company-icons'

interface CompanyNameProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

const companyStyles: Record<string, { font: string; weight: string; tracking: string }> = {
  Asana: {
    font: 'font-sans',
    weight: 'font-bold',
    tracking: 'tracking-tight',
  },
  Trello: {
    font: 'font-sans',
    weight: 'font-extrabold',
    tracking: 'tracking-wider',
  },
  'Monday.com': {
    font: 'font-sans',
    weight: 'font-semibold',
    tracking: 'tracking-normal',
  },
}

const sizeClasses = {
  sm: { icon: 65, text: 'text-lg' },
  md: { icon: 32, text: 'text-base' },
  lg: { icon: 70, text: 'text-lg' },
}

export function CompanyName({ name, size = 'md', showIcon = true }: CompanyNameProps) {
  const style = companyStyles[name] || { font: 'font-sans', weight: 'font-medium', tracking: 'tracking-normal' }
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

