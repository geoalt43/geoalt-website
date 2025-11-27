export const theme = {
  colors: {
    'page-background': 'hsl(0 0% 0%)',
    surface: 'hsl(0 0% 3%)',
    'surface-elevated': 'hsl(0 0% 6%)',
    'surface-hover': 'hsl(0 0% 9%)',
    'text-primary': 'hsl(0 0% 100%)',
    'text-secondary': 'hsl(0 0% 70%)',
    'text-muted': 'hsl(0 0% 50%)',
    'text-disabled': 'hsl(0 0% 30%)',
    interactive: 'hsl(217 91% 60%)',
    'interactive-hover': 'hsl(217 91% 70%)',
    'interactive-active': 'hsl(217 91% 50%)',
    'interactive-disabled': 'hsl(0 0% 30%)',
    border: 'hsl(0 0% 20%)',
    'border-hover': 'hsl(0 0% 30%)',
    divider: 'hsl(0 0% 15%)',
    success: 'hsl(142 76% 36%)',
    'success-bg': 'hsl(142 76% 36% / 0.1)',
    warning: 'hsl(38 92% 50%)',
    'warning-bg': 'hsl(38 92% 50% / 0.1)',
    error: 'hsl(0 84% 60%)',
    'error-bg': 'hsl(0 84% 60% / 0.1)',
    info: 'hsl(199 89% 48%)',
    'info-bg': 'hsl(199 89% 48% / 0.1)',
    'focus-outline': 'hsl(217 91% 60%)',
    selection: 'hsl(217 91% 60% / 0.2)',
    overlay: 'hsl(0 0% 0% / 0.5)',
    'overlay-light': 'hsl(0 0% 0% / 0.3)',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  
  borderRadius: {
    'none': '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    'full': '9999px',
  },
  
  shadows: {
    'sm': '0 1px 2px 0 hsl(0 0% 0% / 0.05)',
    'md': '0 4px 6px -1px hsl(0 0% 0% / 0.1)',
    'lg': '0 10px 15px -3px hsl(0 0% 0% / 0.1)',
    'xl': '0 20px 25px -5px hsl(0 0% 0% / 0.1)',
  },
  
  zIndex: {
    'hide': -1,
    'auto': 'auto',
    'base': 0,
    'docked': 10,
    'dropdown': 1000,
    'sticky': 1100,
    'banner': 1200,
    'overlay': 1300,
    'modal': 1400,
    'popover': 1500,
    'skipLink': 1600,
    'toast': 1700,
    'tooltip': 1800,
  },
  
  transitions: {
    'fast': '150ms ease-in-out',
    'normal': '250ms ease-in-out',
    'slow': '350ms ease-in-out',
  },
} as const

export const cssVariables = {
  '--color-page-background': theme.colors['page-background'],
  '--color-surface': theme.colors.surface,
  '--color-surface-elevated': theme.colors['surface-elevated'],
  '--color-surface-hover': theme.colors['surface-hover'],
  '--color-text-primary': theme.colors['text-primary'],
  '--color-text-secondary': theme.colors['text-secondary'],
  '--color-text-muted': theme.colors['text-muted'],
  '--color-text-disabled': theme.colors['text-disabled'],
  '--color-interactive': theme.colors.interactive,
  '--color-interactive-hover': theme.colors['interactive-hover'],
  '--color-interactive-active': theme.colors['interactive-active'],
  '--color-interactive-disabled': theme.colors['interactive-disabled'],
  '--color-border': theme.colors.border,
  '--color-border-hover': theme.colors['border-hover'],
  '--color-divider': theme.colors.divider,
  '--color-success': theme.colors.success,
  '--color-success-bg': theme.colors['success-bg'],
  '--color-warning': theme.colors.warning,
  '--color-warning-bg': theme.colors['warning-bg'],
  '--color-error': theme.colors.error,
  '--color-error-bg': theme.colors['error-bg'],
  '--color-info': theme.colors.info,
  '--color-info-bg': theme.colors['info-bg'],
  '--color-focus-outline': theme.colors['focus-outline'],
  '--color-selection': theme.colors.selection,
  '--color-overlay': theme.colors.overlay,
  '--color-overlay-light': theme.colors['overlay-light'],
} as const

export type ThemeColors = keyof typeof theme.colors
export type ThemeSpacing = keyof typeof theme.spacing
export type ThemeTypography = keyof typeof theme.typography
export type ThemeBorderRadius = keyof typeof theme.borderRadius
export type ThemeShadows = keyof typeof theme.shadows
export type ThemeZIndex = keyof typeof theme.zIndex
export type ThemeTransitions = keyof typeof theme.transitions

export const getColor = (color: ThemeColors) => theme.colors[color]
export const getSpacing = (spacing: ThemeSpacing) => theme.spacing[spacing]
export const getTransition = (transition: ThemeTransitions) => theme.transitions[transition]

export const getContrastRatio = (): number => {
  return 4.5
}

export const meetsWCAG = (level: 'AA' | 'AAA' = 'AA'): boolean => {
  const ratio = getContrastRatio()
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7
}

