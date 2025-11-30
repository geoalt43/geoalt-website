import { AIResponseData } from './types'

export const aiResponseData: Record<string, AIResponseData> = {
  sentiment: {
    question: 'What are the best project management tools for teams?',
    intro:
      'Selecting the right project management tool depends on your team size, workflow style, and collaboration needs. Here\'s a comprehensive overview of the top project management platforms that teams are using in 2025.',
    companies: [
      {
        rank: 1,
        name: 'Asana',
        description:
          'Asana is excellent for teams that need **structured task management** with clear hierarchies and dependencies. It offers **strong free tier** features including unlimited tasks, projects, and basic integrations. The interface is clean and intuitive, making it easy to track work across multiple projects. However, **advanced features like custom fields and reporting** are locked behind paid plans, which **can become expensive** for larger teams.',
        positiveHighlights: ['structured task management', 'strong free tier'],
        negativeHighlights: ['advanced features like custom fields and reporting', 'can become expensive'],
      },
      {
        rank: 2,
        name: 'Trello',
        description:
          'Trello uses a **simple kanban board approach** that\'s perfect for visual project management. It\'s **very user-friendly** and works great for smaller teams or projects that don\'t require complex workflows. The free plan is generous, and it integrates well with popular tools like Slack and Google Drive. However, it can feel **limited for complex projects** that need advanced automation or detailed reporting.',
        positiveHighlights: ['simple kanban board approach', 'very user-friendly'],
        negativeHighlights: ['limited for complex projects'],
      },
      {
        rank: 3,
        name: 'Monday.com',
        description:
          'Monday.com is a **highly customizable platform** that adapts to various workflow styles. It offers **powerful automation features** and visual project tracking with color-coded boards. The platform scales well from small teams to large organizations. However, the **learning curve can be steep** for new users, and pricing **tends to be higher** than some alternatives.',
        positiveHighlights: ['highly customizable platform', 'powerful automation features'],
        negativeHighlights: ['learning curve can be steep', 'tends to be higher'],
      },
    ],
    sentiment: [
      { score: 85, companyName: 'Asana' },
      { score: 72, companyName: 'Trello' },
      { score: -15, companyName: 'Monday.com' },
    ],
  },
  position: {
    question: 'What are the best project management tools for teams?',
    intro:
      'Selecting the right project management tool depends on your team size, workflow style, and collaboration needs. Here\'s a comprehensive overview of the top project management platforms that teams are using in 2025.',
    companies: [
      {
        rank: 1,
        name: 'Asana',
        description:
          'Asana is excellent for teams that need structured task management with clear hierarchies and dependencies. It offers strong free tier features including unlimited tasks, projects, and basic integrations.',
        positiveHighlights: [],
        negativeHighlights: [],
      },
      {
        rank: 2,
        name: 'Trello',
        description:
          'Trello uses a simple kanban board approach that\'s perfect for visual project management. It\'s very user-friendly and works great for smaller teams or projects that don\'t require complex workflows.',
        positiveHighlights: [],
        negativeHighlights: [],
      },
      {
        rank: 3,
        name: 'Monday.com',
        description:
          'Monday.com is a highly customizable platform that adapts to various workflow styles. It offers powerful automation features and visual project tracking with color-coded boards.',
        positiveHighlights: [],
        negativeHighlights: [],
      },
    ],
    position: [
      { rank: 1, companyName: 'Asana' },
      { rank: 2, companyName: 'Trello' },
      { rank: 3, companyName: 'Monday.com' },
    ],
  },
  visibility: {
    question: 'What are the best project management tools for teams?',
    intro:
      'Selecting the right project management tool depends on your team size, workflow style, and collaboration needs. Here\'s a comprehensive overview of the top project management platforms that teams are using in 2025.',
    companies: [
      {
        rank: 1,
        name: 'Asana',
        description:
          'Asana is excellent for teams that need structured task management with clear hierarchies and dependencies. It offers strong free tier features including unlimited tasks, projects, and basic integrations.',
        positiveHighlights: [],
        negativeHighlights: [],
      },
      {
        rank: 2,
        name: 'Trello',
        description:
          'Trello uses a simple kanban board approach that\'s perfect for visual project management. It\'s very user-friendly and works great for smaller teams or projects that don\'t require complex workflows.',
        positiveHighlights: [],
        negativeHighlights: [],
      },
      {
        rank: 3,
        name: 'Monday.com',
        description:
          'Monday.com is a highly customizable platform that adapts to various workflow styles. It offers powerful automation features and visual project tracking with color-coded boards.',
        positiveHighlights: [],
        negativeHighlights: [],
      },
    ],
    visibility: [
      { percentage: 68, companyName: 'Asana' },
      { percentage: 52, companyName: 'Trello' },
      { percentage: 41, companyName: 'Monday.com' },
    ],
  },
}

