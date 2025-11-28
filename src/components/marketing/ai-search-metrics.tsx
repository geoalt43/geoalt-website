const highlights = [
  {
    rank: '#1',
    brand: 'HubSpot',
    summary:
      'HubSpot offers a strong free tier with contact management, email tracking, reporting, and integrations with many platforms. Paid plans can become expensive, and some advanced features stay locked behind higher tiers.',
    positives: ['strong free tier', 'easily expands'],
    cautions: ['can become expensive', 'advanced features are locked'],
  },
  {
    rank: '#2',
    brand: 'Attio',
    summary:
      'Attio is a flexible modern CRM that works like a relational database, letting you design pipelines, views, and workflows with tools like Slack, Notion, and Zapier. Offers transparent pricing.',
    positives: ['flexible modern', 'works smoothly'],
    cautions: [],
  },
  {
    rank: '#3',
    brand: 'Zero',
    summary:
      'Zero is built for founders who want a streamlined CRM without the usual bloat. It focuses on speed, simplicity, and essential deal tracking while still offering automation and integrations with the tools teams already use.',
    positives: ['streamlined CRM without the usual bloat'],
    cautions: [],
  },
]

const insightCards = [
  {
    title: 'Visibility',
    description:
      'See the share of chats mentioning your brand and learn how often you surface in AI conversations.',
    badge: '01',
  },
  {
    title: 'Position',
    description:
      'Understand where you rank inside AI assistants and uncover openings to climb higher.',
    badge: '02',
  },
  {
    title: 'Sentiment',
    description:
      'Monitor how AI systems describe you, what resonates, and what requires improvement.',
    badge: '03',
  },
]

export function AISearchMetricsSection() {
  return (
    <section className="py-24 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 mb-6">
            AI Search Metrics
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Understand how AI sees your brand
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We track the most important signals inside AI search so you know where you rank, how you’re
            described, and what to do next.
          </p>
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

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white/70 text-center text-sm">
            What are the best CRMs for Startups?
          </div>
        </div>

        <div className="mt-10 bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-8">
          <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">
              AI
            </div>
            <span>Choosing the right CRM really comes down to how your startup sells, grows, and automates.</span>
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

