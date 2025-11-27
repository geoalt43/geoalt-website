export function FeaturesSection() {
  return (
    <section className="pt-24 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 pb-16 text-center">
          <h2 className="text-5xl font-normal text-white mb-3 tracking-tight">Own your visibility on AI Search</h2>
          <p className="text-base mx-auto" style={{ color: '#9b9b9b' }}>
            GEOAlt offers unparalleled accuracy, real-time insights, and a commitment to data security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Accurate Data */}
          <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-10">
            <div className="mb-5">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 13l3-3 4 4 5-6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Accurate Data</h3>
            <p className="text-base" style={{ color: '#9b9b9b' }}>
              Our advanced algorithms ensure precise tracking of your AI visibility.
            </p>
          </div>

          {/* Real-time Insights */}
          <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-10">
            <div className="mb-5">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>
            <p className="text-base" style={{ color: '#9b9b9b' }}>
              Stay ahead of the curve with up‑to‑the‑minute data on your performance.
            </p>
          </div>

          {/* Secure & Reliable */}
          <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-10">
            <div className="mb-5">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
            <p className="text-base" style={{ color: '#9b9b9b' }}>
              We prioritize the security and confidentiality of your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

