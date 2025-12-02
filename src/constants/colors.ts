// Color constants - extracted from hardcoded values throughout codebase
// All values kept exactly the same to maintain identical styling

export const colors = {
  // Background colors
  surfaceDark: '#090909',
  surfaceDarker: '#0a0a0a',
  surfaceDarkest: '#050505',
  borderDark: '#1d1d1d',
  borderGray: '#656565',
  
  // Text colors
  textSecondary: '#9b9b9b',
  textMuted: '#898989',
  
  // Interactive colors
  hoverGray: '#d4d4d4',
  hoverGrayLight: '#a0a0a0',
  
  // Gradient colors (hero section)
  gradientBlue: '#4285f4',
  gradientPurple: '#9c27b0',
  gradientRed: '#ea4335',
} as const

// Tailwind class equivalents for easy replacement
export const colorClasses = {
  surfaceDark: 'bg-[#090909]',
  surfaceDarker: 'bg-[#0a0a0a]',
  surfaceDarkest: 'bg-[#050505]',
  borderDark: 'border-[#1d1d1d]',
  borderGray: 'border-[#656565]',
  textSecondary: 'text-[#9b9b9b]',
  textMuted: 'text-[#898989]',
  hoverGray: 'hover:bg-[#d4d4d4]',
  hoverGrayLight: 'hover:bg-[#a0a0a0]',
} as const

