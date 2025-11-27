'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HeroSection } from '@/components/marketing/hero-section'
import { FeaturesSection } from '@/components/marketing/features-section'
import { FAQSection } from '@/components/marketing/faq-section'
import { CTASection } from '@/components/marketing/cta-section'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import OpenAI from '@lobehub/icons/es/OpenAI'
import { Gemini } from '@lobehub/icons'

const trustedBrands = [
  { label: 'Flow', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'Flux', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'Nex', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'dabble', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'SuperPen', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
  { label: 'Modo', className: 'text-[1rem] sm:text-[2.5rem] font-medium text-white' },
]

const CheckIcon = () => (
  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-white text-xs font-semibold">
    ✓
  </span>
)

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

      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-[2px] border-white/10 p-4 sm:p-6 lg:p-8">
            <Image
              src="/images/img-1.jpeg"
              alt="GEOAlt analytics dashboard"
              width={1280}
              height={720}
              priority
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="w-[98.5%] sm:w-[99.5%] mx-auto h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-76">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[0px] border-y border-white/10 bg-transparent px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-32 h-32 bg-white/0 rounded-full blur-3xl -top-10 -left-6" />
              <div className="absolute w-40 h-40 bg-white/0 rounded-full blur-3xl -bottom-16 right-6" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(25,250,255,0.2),_transparent_55%)]" />
            </div>
            <div className="relative flex flex-col items-center gap-6 sm:gap-10">
              <p className="text-lg font-base tracking-wide text-white -mt-4">Trusted by</p>
              <div
                className="w-full overflow-hidden"
                style={{ maskImage: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.9) 12%, rgba(0,0,0,0.9) 88%, transparent)' }}
              >
                <div className="trusted-marquee flex items-center gap-19 sm:gap-20">
                  {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                    <span key={`${brand.label}-${index}`} className={`${brand.className} whitespace-nowrap`}>
                      {brand.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 scroll-mt-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hidden md:block" />
          <div className="border-[0.5px] border-white/20 bg-white/10 rounded-t-[18px] px-12 py-4 text-base font-medium text-white text-center">
            Recommended plan
          </div>
          <div className="hidden md:block" />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#090909] border border-white/10 rounded-lg p-10 flex flex-col gap-8 text-white">
              <div>
                <p className="text-lg font-semibold mb-3">Basic</p>
                <p className="text-[2.5rem] font-normal leading-none">$99<span className="text-lg font-light">/mo</span></p>
              </div>
              <p className="text-base text-white/70">For teams who want to run GEO in-house.</p>
              <div className="flex flex-col gap-4 text-sm text-white/80">
                {['Track 25 prompts', 'Access to all models (ChatGPT, Gemini, Perplexity, etc.)', 'Email support'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://forms.gle/wLMpHeTqQogumFMK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full rounded-full bg-white text-black py-3 text-sm font-semibold text-center block hover:bg-white/90 transition-colors"
              >
                Start free trial
              </a>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-b-lg p-10 flex flex-col gap-8 text-white shadow-2xl shadow-white/10">
              <div>
                <p className="text-lg font-semibold mb-3">Pro</p>
                <p className="text-[2.5rem] font-normal leading-none">$299<span className="text-lg font-light">/mo</span></p>
              </div>
              <p className="text-base text-white/70">Everything in Basic, plus:</p>
              <div className="flex flex-col gap-4 text-sm text-white/80">
                {['Track 100 prompts', 'Access to all models (ChatGPT, Gemini, Perplexity, etc.)', '8 AI-optimized articles', 'Email and Slack Support'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://forms.gle/wLMpHeTqQogumFMK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full rounded-full bg-white text-black py-3 text-sm font-semibold text-center block hover:bg-white/90 transition-colors"
              >
                Start free trial
              </a>
            </div>

            <div className="bg-[#090909] border border-white/10 rounded-lg p-10 flex flex-col gap-8 text-white">
              <div>
                <p className="text-lg font-semibold mb-3">Enterprise</p>
                <p className="text-[2.5rem] font-normal leading-none">Custom</p>
              </div>
              <p className="text-base text-white/70">Everything in Pro, plus:</p>
              <div className="flex flex-col gap-4 text-sm text-white/80">
                {['Custom limits', 'White-glove onboarding', 'Enterprise support', 'SAML SSO'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-auto w-full rounded-full border border-white/40 text-white py-3 text-sm font-semibold">Contact Us</button>
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
