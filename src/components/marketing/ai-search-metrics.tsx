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

const insightCards = [
  {
    title: 'Visibility',
    description:
      'Track your brand\'s share of voice across AI conversations and measure how frequently you appear in AI-generated responses.',
    badge: '01',
  },
  {
    title: 'Position',
    description:
      'Discover your ranking position within AI assistant responses and identify strategic opportunities to improve your visibility.',
    badge: '02',
  },
  {
    title: 'Sentiment',
    description:
      'Analyze how AI systems characterize your brand, identify what messaging resonates, and pinpoint areas for optimization.',
    badge: '03',
  },
]

export function AISearchMetricsSection() {
  return (
    <section className="py-24 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Understand how AI sees your brand
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Track the most critical signals across AI search platforms to understand your brand's visibility, 
            positioning, and sentiment—then take action to improve your AI presence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white/70 text-center text-sm">
            How does GEOAlt track AI visibility across different platforms?
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insightCards.map(card => (
            <div key={card.title} className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6 text-white/80">
              <div className="inline-flex items-center justify-center text-sm font-semibold text-white/80 bg-white/5 border border-white/10 rounded-full w-10 h-10 mb-4">
                {card.badge}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-8">
          <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">
              AI
            </div>
            <span>Understanding your AI visibility requires tracking multiple signals across different platforms and models to get a complete picture of your brand's presence.</span>
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

