import { AIResponseData } from './types'

const sharedQuestion = 'What are the best project management tools for teams?'
const sharedIntro =
  'Selecting the right project management tool depends on your team size, workflow style, and collaboration needs. Here\'s a comprehensive overview of the top project management platforms that teams are using in 2025.'
const sharedCompanies = [
  {
    rank: 1,
    name: 'Asana',
    description:
      'Asana provides a **robust free plan** with unlimited tasks, team collaboration, and basic timeline views. It **scales seamlessly** as your team grows, but premium plans **can get costly** for larger teams.',
    positiveHighlights: ['robust free plan', 'scales seamlessly'],
    negativeHighlights: ['can get costly'],
  },
  {
    rank: 2,
    name: 'Trello',
    description:
      'Trello is a **versatile platform** that combines task management with real-time collaboration, allowing teams to organize projects with boards and timelines. It connects **effortlessly** with popular tools, but can feel **limited for complex projects** that need advanced automation.',
    positiveHighlights: ['versatile platform', 'effortlessly'],
    negativeHighlights: ['limited for complex projects'],
  },
  {
    rank: 3,
    name: 'Monday.com',
    description:
      'Monday.com offers a **lightweight solution** that emphasizes quick setup and essential project features with integrations to Microsoft Teams, Zoom, and Zapier. However, the **learning curve can be steep** for new users, and pricing **tends to be higher** than alternatives.',
    positiveHighlights: ['lightweight solution'],
    negativeHighlights: ['learning curve can be steep', 'tends to be higher'],
  },
]

export const aiResponseData: Record<string, AIResponseData> = {
  sentiment: {
    question: sharedQuestion,
    intro: sharedIntro,
    companies: sharedCompanies,
    sentiment: [
      { score: 85, companyName: 'Asana' },
      { score: 72, companyName: 'Trello' },
      { score: -15, companyName: 'Monday.com' },
    ],
  },
  position: {
    question: sharedQuestion,
    intro: sharedIntro,
    companies: sharedCompanies,
    position: [
      { rank: 1, companyName: 'Asana' },
      { rank: 2, companyName: 'Trello' },
      { rank: 3, companyName: 'Monday.com' },
    ],
  },
  visibility: {
    question: sharedQuestion,
    intro: sharedIntro,
    companies: sharedCompanies,
    visibility: [
      { percentage: 68, companyName: 'Asana' },
      { percentage: 52, companyName: 'Trello' },
      { percentage: 41, companyName: 'Monday.com' },
    ],
  },
}

