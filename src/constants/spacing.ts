// Spacing constants - extracted from hardcoded values
// All values kept exactly the same to maintain identical spacing

export const spacing = {
  // Custom padding values
  sectionPaddingTop: 'pt-[45.6px]',
  sectionPaddingTopAlt: 'pt-[36.54px]',
  sectionPaddingTopSm: 'sm:pt-[48.72px]',
  sectionPaddingTopSmAlt: 'sm:pt-[60.8px]',
  
  // Custom margin values (for ai-response-card)
  marginLeftSmall: 'ml-[80px]',
  marginLeftMedium: 'sm:ml-[280px]',
  marginLeftLarge: 'md:ml-[360px]',
  marginLeftXLarge: 'lg:ml-[440px]',
  
  // Custom dimensions
  minHeightCard: 'min-h-[320px]',
  minHeightCardSm: 'sm:min-h-[330px]',
  minHeightCardLg: 'lg:min-h-[400px]',
  maxWidthCard: 'max-w-[90%]',
  maxWidthCardSm: 'sm:max-w-none',
  
  // Percentage heights (dashboard images)
  heightFull: 'h-[100%]',
  heightOverflow: 'h-[128%]',
} as const

