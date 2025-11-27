'use client'

import { useState, useEffect, useRef } from 'react'
import { HeroSection } from '@/components/marketing/hero-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { FAQSection } from '@/components/marketing/faq-section'
import { CTASection } from '@/components/marketing/cta-section'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import OpenAI from '@lobehub/icons/es/OpenAI'
import { Gemini } from '@lobehub/icons'

export function HomePage() {
  const [isTextLoaded, setIsTextLoaded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextLoaded(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenFaq(null)
      }
    }

    if (openFaq !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openFaq])


  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      <HeroSection isTextLoaded={isTextLoaded} />

      <section className="py-10 pt-24 pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-black border border-gray-600 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
            <div className="flex w-full">
              <div className="w-64 flex-shrink-0 p-6" style={{ backgroundColor: '#111111' }}>
                <div className="space-y-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-white">GE</span>
                      <OpenAI size={16} className="text-white" />
                      <span className="text-sm font-semibold text-white">Alt</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-3">Dashboard</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 py-1.5 px-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors cursor-pointer">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h5v8H3v-8zm7 0h11v8H10v-8z"/>
                        </svg>
                        <span className="text-xs font-medium text-white">Overview</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M3 3v18h18"/>
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                        </svg>
                        <span className="text-xs text-white whitespace-nowrap">Answer Engine Insights</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="12" cy="12" r="9"/>
                          <path d="M8 10h.01M16 10h.01"/>
                          <path d="M8 15c1.3 1 2.7 1.5 4 1.5s2.7-.5 4-1.5"/>
                        </svg>
                        <span className="text-xs text-white whitespace-nowrap">Sentiment Analysis</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <line x1="9" y1="9" x2="15" y2="9"/>
                          <line x1="9" y1="15" x2="15" y2="15"/>
                        </svg>
                        <span className="text-xs text-white">Platforms</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2 hover:bg-gray-800 rounded transition-colors cursor-pointer">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="3"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a3 3 0 1 1 0 5.74"/>
                        </svg>
                        <span className="text-xs text-white">Agent Analytics</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Gemini.Color size={16} />
                      <div className="text-xs font-semibold tracking-wide" style={{ 
                        background: 'linear-gradient(135deg, #00D4FF, #0099CC, #0066FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        Improve AI Visibility
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 py-1.5 px-2">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M6 2h9a3 3 0 0 1 3 3v15l-6-3-6 3V5a3 3 0 0 1 3-3z"/>
                        </svg>
                        <span className="text-xs text-white">Blogs</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <span className="text-xs text-white">Inbox</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 py-1.5 px-2">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"/>
                          <path d="M9 9h.01"/>
                          <path d="M15 9h.01"/>
                        </svg>
                        <span className="text-xs text-white">Support</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M3 3h18v18H3V3z"/>
                          <path d="M8 8h8"/>
                          <path d="M8 12h8"/>
                          <path d="M8 16h5"/>
                        </svg>
                        <span className="text-xs text-white">What&apos;s New?</span>
                      </div>
                      <div className="flex items-center space-x-2 py-1.5 px-2">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-white">A</span>
                        </div>
                        <span className="text-xs text-white">Aniket</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Dashboard</h2>
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-gray-300">Next Prompts Run: 14:36:36</div>
                    <div className="flex items-center space-x-1 bg-gray-800 rounded px-2 py-1">
                      <span className="text-xs font-medium text-white">ChatGPT</span>
                      <OpenAI size={12} style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="text-xs text-gray-300 mb-1">Brand Visibility</div>
                    <div className="text-2xl font-bold text-white mb-1">82.5%</div>
                    <div className="text-xs text-gray-400">Based on 231 prompts simulated</div>
                  </div>
                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="text-xs text-gray-300 mb-1 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 17.3l-6.18 3.24 1.18-6.88L2 8.76l6.91-1L12 1.5l3.09 6.26 6.91 1-5 4.9 1.18 6.88L12 17.3z"/>
                      </svg>
                      Top Source
                    </div>
                    <div className="flex items-center space-x-1 mb-1">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#0f0f0f" fontFamily="sans-serif">F</text>
                      </svg>
                      <span className="text-sm font-semibold text-white">Forbes</span>
                    </div>
                    <div className="text-xs text-gray-400">129 mentions</div>
                  </div>
                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="text-xs text-gray-300 mb-1">Closest Competitor</div>
                    <div className="flex items-center space-x-1 mb-1">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" />
                        <path d="M8 12h8M12 8v8" />
                      </svg>
                      <span className="text-sm font-semibold text-white">Netlify</span>
                    </div>
                    <div className="text-xs text-gray-400">89 mentions</div>
                  </div>
                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="text-xs text-gray-300 mb-1">Brand Ranking</div>
                    <div className="text-xl font-bold text-white mb-1">#1</div>
                    <div className="text-xs text-gray-400">Market leader</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-semibold text-white">Brand Visibility</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-300">Show competitor visibility</span>
                        <div className="relative">
                          <input 
                            type="checkbox" 
                            className="sr-only" 
                            id="competitor-toggle" 
                            aria-label="Toggle competitor visibility"
                          />
                          <label htmlFor="competitor-toggle" className="flex items-center cursor-pointer">
                            <div className="w-8 h-4 bg-gray-600 rounded-full transition-colors duration-200">
                              <div className="w-3 h-3 bg-white rounded-full shadow transform transition-transform duration-200 translate-x-0.5 translate-y-0.5"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="h-40 bg-gray-900 rounded p-3">
                      <div className="text-xs text-gray-300 mb-2">Daily Visibility (%)</div>
                      <div className="h-28 bg-black rounded flex items-end justify-between px-2" style={{borderColor: '#656565'}}>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-blue-500 h-16 rounded-t" style={{height: '64px'}}></div>
                          <div className="text-xs text-gray-300">Vercel (You)</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-orange-400 h-10 rounded-t" style={{height: '40px'}}></div>
                          <div className="text-xs text-gray-300">Netlify</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-blue-500 h-12 rounded-t" style={{height: '48px'}}></div>
                          <div className="text-xs text-gray-300">Jul 10</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-blue-500 h-14 rounded-t" style={{height: '56px'}}></div>
                          <div className="text-xs text-gray-300">Jul 15</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-blue-500 h-18 rounded-t" style={{height: '72px'}}></div>
                          <div className="text-xs text-gray-300">Jul 20</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-blue-500 h-20 rounded-t" style={{height: '80px'}}></div>
                          <div className="text-xs text-gray-300">Jul 25</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-3 bg-blue-500 h-16 rounded-t" style={{height: '64px'}}></div>
                          <div className="text-xs text-gray-300">Jul 28</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="flex justify_between items-center mb-3">
                      <h3 className="text-sm font-semibold text-white">Competitor Rankings</h3>
                      <div className="flex space-x-1">
                        <button className="px-2 py-0.5 bg-blue-600 text-white text-xs font-medium rounded">All Time</button>
                        <button className="px-2 py-0.5 text-gray-300 text-xs font-medium rounded">Last Month</button>
                        <button className="px-2 py-0.5 text-gray-300 text-xs font-medium rounded">Last Week</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-white">1</span>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 4l8 14H4l8-14z" />
                          </svg>
                          <span className="text-xs font-medium text-white">Vercel (You)</span>
                        </div>
                        <span className="text-xs font-semibold text-white">21.1%</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-white">2</span>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                            <rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" />
                            <path d="M8 12h8M12 8v8" />
                          </svg>
                          <span className="text-xs font-medium text_white">Netlify</span>
                        </div>
                        <span className="text-xs font-semibold text_white">19.4%</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items_center space-x-2">
                          <span className="text-xs font_medium text-white">3</span>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <rect x="5" y="5" width="14" height="14" rx="2" />
                          </svg>
                          <span className="text-xs font-medium text-white">Render</span>
                        </div>
                        <span className="text-xs font-semibold text-white">11.6%</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-white">4</span>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                            <path d="M10 7h4M8 17l5-5-2 5" />
                          </svg>
                          <span className="text-xs font-medium text-white">Heroku</span>
                        </div>
                        <span className="text-xs font-semibold text-white">11.3%</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-white">5</span>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M7 16a4 4 0 0 1 0-8 5 5 0 0 1 9.7-1.3A4 4 0 1 1 17 16H7z" />
                          </svg>
                          <span className="text-xs font-medium text-white">Cloudflare Pages</span>
                        </div>
                        <span className="text-xs font-semibold text-white">8.5%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-semibold text-white">Top Sources</h3>
                      <div className="flex space-x-1">
                        <button className="px-2 py-0.5 bg-blue-600 text-white text-xs font-medium rounded">All Time</button>
                        <button className="px-2 py-0.5 text-gray-300 text-xs font-medium rounded">Last Month</button>
                        <button className="px-2 py-0.5 text-gray-300 text-xs font-medium rounded">Last Week</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-white">1</span>
                          <svg className="w-5 h-5 text-white" viewBox="0 0 64 64" fill="none" aria-hidden>
                            <path d="M12 46c8 4 32 4 40 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                            <text x="10" y="28" fontFamily="sans-serif" fontWeight="700" fontSize="18" fill="currentColor">AWS</text>
                          </svg>
                          <span className="text-xs font-medium text-white">AWS</span>
                        </div>
                        <span className="text-xs font-semibold text-white">32</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-lg p-4 shadow-sm" style={{borderColor: '#656565'}}>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text_sm font-semibold text-white">Top Web Pages</h3>
                      <div className="flex space-x-1">
                        <button className="px-2 py-0.5 bg-blue-600 text-white text-xs font-medium rounded">All Time</button>
                        <button className="px-2 py-0.5 text-gray-300 text-xs font-medium rounded">Last Month</button>
                        <button className="px-2 py-0.5 text-gray-300 text-xs font-medium rounded">Last Week</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-white">1</span>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 4l8 14H4l8-14z" />
                          </svg>
                          <span className="text-xs font-medium text-white">https://vercel.com/</span>
                        </div>
                        <span className="text-xs font-semibold text-white">37</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[3.25rem] font-normal text-white mb-8 pt-4">Stay ahead in the AI-driven search landscape</h2>
            <p className="text-xl text-gray-500 font-light mb-16 pb-12 tracking-wide">
              Traditional SEO is losing ground as AI-powered search engines prioritize direct answers.
              <br />
              <span className="pb-4 inline-flex items-center justify-center">GE<OpenAI size={20} className="mx-0.5" />Alt helps you adapt and thrive.</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black border border-gray-600 rounded-lg p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visibility Tracking</h3>
                <p className="text-lg text-gray-400 font-normal">Monitor your brand&apos;s presence in AI-generated answers across various platforms.</p>
              </div>

              <div className="bg-black border border-gray-600 rounded-lg p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Competitor Analysis</h3>
                <p className="text-lg text-gray-400 font-normal">Analyze competitor strategies and identify opportunities to gain an edge.</p>
              </div>

              <div className="bg-black border border-gray-600 rounded-lg p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimization Recommendations</h3>
                <p className="text-lg text-gray-400 font-normal">Receive actionable recommendations to optimize your content for AI visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 pb-32 text-center">
            <h2 className="text-5xl font-normal text-white mb-4 tracking-tight">Gain insights and optimize your strategy</h2>
            <p className="text-lg mx-auto" style={{color: '#9b9b9b'}}>
              GEOAlt provides a comprehensive suite of tools to understand your AI visibility and improve your performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGTYqTXIxVx8NL4wys8TWMMh6G6eTmNOltncswi4UyZKhJAJctssowFdWs2LcP-9Rom8aQJ0qd0M_hFJnok26sfwwi_aK0Gl2USuxjpzWgg3oMekvW28bcWznoDPdL9YK7P047P3PDMeklFwgXJT8XeA2VR4xqg3R__9yj_vLVs5XE-AQwXACJro00t1DV0zgb5SGXkObWiIbdmpNCoq17YyxI5lu7V1vbU1E8KideA8kdr6Omc2plf1Vmz6dxtKsqjozBqiM2B4Ww")', filter: 'grayscale(100%) saturate(0%) contrast(115%)' }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Track your AI visibility</p>
                <p className="text-white/70 text-sm font-normal leading-normal">Monitor your brand&apos;s presence in AI-generated answers across various platforms.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCq1kKt1NkGBd-mXYMUFS5H8FRuzUxcbgrr7JEUeDMn2L5uM_lANaIaNjEPrrx2vtRstRlxr1H4-F0Ncr-w_7A0v1uVn45qReeoyBY-SA390xaOEGII3Ygid8kmWH8WklWb0eCFi0dPteVG4zc_URFJz3Ia_yStFV8N092wZqKs--wd-YTFNC90zenax4_7ptlOKqwCjTLgiMFwkUJigVvHzwuElgBIAMhNLdiGstgAb0kCmnMlDoBX694qJQ4S7bQlasIm6mr32hmP")', filter: 'grayscale(100%) saturate(0%) contrast(115%)' }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Analyze competitor strategies</p>
                <p className="text-white/70 text-sm font-normal leading-normal">Analyze competitor strategies and identify opportunities to gain an edge.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAlnna6fqojRzee2a1Lbzv0S0vJh9qoFyujowjgP9WP8T3BiLf3pFO_x54yVx9xNx_LAkqRpZ6DvTiEpfXeZIM_OwVf3tgFoSaaz0wZ8rkbYuiO3QIK4SKQEAJN2WrsKp2ogGJxbSm0ZCzuq5kbWRPW-fQi81lbmB79mQCMFMSjgNgfEZz5Cvb8Zp7nwSScaS7DpA8EMPDQYgjM9OL_7OQpBpwvADJF7yruc_8G_FeOVgzrj6iVHe_YtHFhkUp_jnzXsge8Np-7k3K")', filter: 'grayscale(100%) saturate(0%) contrast(115%)' }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Optimize your content</p>
                <p className="text-white/70 text-sm font-normal leading-normal">Receive actionable recommendations to optimize your content for AI visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-40 pb-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 pb-8 text-center">
            <h2 className="text-5xl font-normal text-white mb-4 tracking-tight">Empowering businesses of all sizes</h2>
            <p className="text-lg" style={{color: '#9b9b9b'}}>
              GEOAlt caters to a wide range of businesses, from startups to enterprises, seeking to
              enhance their AI visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12">
              <div className="mb-5">
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="text-[1.3rem] font-semibold text-white mb-3.5">Marketing Teams</h3>
              <p className="text-base" style={{color: '#9b9b9b'}}>
                Track campaign performance and optimize content for AI-driven search.
              </p>
            </div>

            <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12">
              <div className="mb-5">
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
                </svg>
              </div>
              <h3 className="text-[1.3rem] font-semibold text-white mb-3.5">Content Creators</h3>
              <p className="text-base" style={{color: '#9b9b9b'}}>
                Create content that resonates with AI algorithms and drives organic traffic.
              </p>
            </div>

            <div className="bg-black/60 border border-[#3a3a3a] rounded-2xl p-12">
              <div className="mb-5">
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.3-4.3"/>
                </svg>
              </div>
              <h3 className="text-[1.3rem] font-semibold text-white mb-3.5">SEO Specialists</h3>
              <p className="text-base" style={{color: '#9b9b9b'}}>
                Adapt SEO strategies to the evolving landscape of AI-powered search.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <FAQSection openFaq={openFaq} toggleFaq={toggleFaq} faqRef={faqRef} />

      <CTASection />

      <Footer />
    </div>
  )
}
