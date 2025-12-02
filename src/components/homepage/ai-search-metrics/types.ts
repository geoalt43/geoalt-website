export type InsightType = 'visibility' | 'position' | 'sentiment'

export interface CRMCompany {
  rank: number
  name: string
  logo?: string
  description: string
  positiveHighlights: string[]
  negativeHighlights: string[]
}

export interface SentimentData {
  score: number
  companyName: string
}

export interface PositionData {
  rank: number
  companyName: string
  logo?: string
}

export interface VisibilityData {
  percentage: number
  companyName: string
  logo?: string
}

export interface AIResponseData {
  question: string
  intro: string
  companies: CRMCompany[]
  sentiment?: SentimentData[]
  position?: PositionData[]
  visibility?: VisibilityData[]
}

