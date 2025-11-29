const highlights = [
  {
    rank: '#1',
    brand: 'Your Brand',
    summary:
      'Your brand consistently appears in AI-generated responses with strong visibility across major AI platforms. You maintain a competitive position with positive sentiment and clear messaging that resonates with AI systems.',
    positives: ['high visibility', 'positive sentiment', 'consistent presence'],
    cautions: [],
  },
  {
    rank: '#2',
    brand: 'Competitor A',
    summary:
      'This competitor shows strong performance in AI search results with frequent mentions and favorable positioning. They leverage strategic content optimization to maintain their ranking.',
    positives: ['strong performance', 'frequent mentions'],
    cautions: ['opportunity to outperform'],
  },
  {
    rank: '#3',
    brand: 'Competitor B',
    summary:
      'Competitor B appears less frequently in AI responses but shows potential for growth. Their current positioning suggests opportunities to improve visibility through targeted content strategies.',
    positives: ['growth potential'],
    cautions: ['lower visibility', 'needs optimization'],
  },
]

const VisibilityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const PositionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const SentimentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const insightCards = [
  {
    title: 'Visibility',
    description:
      'See how often your brand appears in AI conversations and measure the consistency of your mentions.',
    icon: VisibilityIcon,
  },
  {
    title: 'Position',
    description:
      'Understand your brand\'s ranking in AI search results and identify quick opportunities to move up.',
    icon: PositionIcon,
  },
  {
    title: 'Sentiment',
    description:
      'Learn how AI feels about your brand, what\'s positive, what\'s negative, and what needs attention.',
    icon: SentimentIcon,
  },
]

export function AISearchMetricsSection() {
  return (
    <section className="py-24 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-normal text-white">
            How AI actually sees your brand
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Everything that matters in one place
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white/70 text-center text-sm">
            How does GEOAlt track AI visibility across different platforms?
          </div>
        </div>

        <div className="mt-12 max-w-7xl mx-auto grid gap-4 md:grid-cols-3">
          {insightCards.map(card => {
            const IconComponent = card.icon
            return (
              <div key={card.title} className="bg-[#0d0d0d] border border-white/10 rounded-lg p-6 text-white/80">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent />
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-8 mt-4">
          <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">
              AI
            </div>
            <span>Understanding your AI visibility requires tracking multiple signals across different platforms and models to get a complete picture of your brand&apos;s presence.</span>
          </div>
          <div className="space-y-6">
            {highlights.map(item => (
              <div key={item.brand} className="bg-[#111111] border border-white/10 rounded-xl p-6 text-white/90">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wide text-white/50">{item.rank}</span>
                  <p className="text-lg font-semibold text-white">{item.brand}</p>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{item.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.positives.map(text => (
                    <span key={text} className="bg-green-500/15 text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                      {text}
                    </span>
                  ))}
                  {item.cautions.map(text => (
                    <span key={text} className="bg-rose-500/15 text-rose-300 text-xs font-medium px-3 py-1 rounded-full">
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

