export function EmpoweringBusinessesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: 'Marketing Teams',
      subtitle: 'Track brand visibility across AI platforms',
      features: [
        { label: 'Brand Tracking', desc: 'Monitor appearances across priority markets' },
        { label: 'Campaign Analytics', desc: 'Measure AI-driven discovery impact' },
        { label: 'Competitive Insights', desc: 'Benchmark against competitors' },
        { label: 'Market Intelligence', desc: 'Identify trends in AI recommendations' },
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      ),
      title: 'Content Creators',
      subtitle: 'Create AI-discoverable content',
      features: [
        { label: 'Content Optimization', desc: 'Format for AI platform surfacing' },
        { label: 'Topic Analysis', desc: 'Identify high-performing narratives' },
        { label: 'Asset Longevity', desc: 'Build long-term visibility sources' },
        { label: 'Format Insights', desc: 'Discover content types AI prefers' },
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
      title: 'SEO Specialists',
      subtitle: 'Evolve beyond traditional rankings',
      features: [
        { label: 'AI Search Visibility', desc: 'Track citations in AI responses' },
        { label: 'Citation Monitoring', desc: 'See where your brand appears' },
        { label: 'Trust Signals', desc: 'Learn what AI values in your space' },
        { label: 'Source Analysis', desc: 'Identify trusted reference sources' },
      ],
    },
  ]

  return (
    <section className="empowering-section pt-2 sm:pt-3 md:pt-4 lg:pt-5 pb-6 sm:pb-8 md:pb-10 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 md:pb-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-normal md:font-normal mb-2 sm:mb-6 md:mb-6 text-text-heading">
            Built for every team
          </h2>
          <p className="hidden sm:block text-sm sm:text-base md:text-lg text-text-description max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Geoalt empowers marketing, content,<br className="hidden md:block" /> and SEO teams to dominate<br className="hidden md:block" /> AI-driven discovery
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {features.map((card) => (
            <div
              key={card.title}
              className="empowering-card relative bg-[var(--color-card-bg)] dark:bg-[var(--color-ref-043)] border border-[var(--color-card-border)] rounded-lg p-4 sm:p-6 md:p-8 overflow-hidden shadow-[0_4px_6px_-1px_var(--color-ref-035),0_2px_4px_-1px_var(--color-ref-036)] transition-all duration-500 hover:shadow-lg"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-text-primary/10 flex items-center justify-center text-text-primary transition-transform duration-300 hover:scale-110">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-heading mb-0.5 sm:mb-1 tracking-tight">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-text-description">{card.subtitle}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="space-y-2 sm:space-y-3">
                  {card.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3"
                    >
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-text-heading/90 tracking-tight">{feature.label}</p>
                        <p className="text-[11px] sm:text-xs text-text-description mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
