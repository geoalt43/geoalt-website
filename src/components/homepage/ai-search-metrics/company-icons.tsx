import Image from 'next/image'

interface CompanyIconProps {
  size?: number
  className?: string
}

const logoUrls = {
  Asana: 'https://cdn.brandfetch.io/idxPi2Evsk/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667580486577',
  Trello: 'https://cdn.brandfetch.io/idToc8bDY1/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667574636117',
  'Monday.com': 'https://cdn.brandfetch.io/idHFUcTb1F/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1700068254966',
}

export const AsanaIcon = ({ size = 20, className = '' }: CompanyIconProps) => (
  <Image
    src={logoUrls.Asana}
    alt="Asana logo"
    width={size}
    height={size}
    className={className}
    unoptimized
  />
)

export const TrelloIcon = ({ size = 20, className = '' }: CompanyIconProps) => (
  <Image
    src={logoUrls.Trello}
    alt="Trello logo"
    width={size}
    height={size}
    className={className}
    unoptimized
  />
)

export const MondayIcon = ({ size = 20, className = '' }: CompanyIconProps) => (
  <Image
    src={logoUrls['Monday.com']}
    alt="Monday.com logo"
    width={size}
    height={size}
    className={className}
    unoptimized
  />
)

