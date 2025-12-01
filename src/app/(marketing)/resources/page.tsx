import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources & Blog',
  description: 'Learn about AI visibility optimization, GEO strategies, and stay updated with the latest trends in AI-powered search.',
}

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "The Complete Guide to AI Visibility Optimization",
      excerpt: "Learn how to optimize your content for AI platforms like ChatGPT, Perplexity, and Claude to increase your brand's visibility.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Guide"
    },
    {
      title: "Why Traditional SEO is Failing in the AI Era",
      excerpt: "Discover why your current SEO strategy might not be working and how to adapt to AI-powered search engines.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Analysis"
    },
    {
      title: "Case Study: How We Increased Brand Mentions by 300%",
      excerpt: "A detailed look at how we helped a SaaS company dramatically improve their AI visibility across multiple platforms.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Case Study"
    },
    {
      title: "The Future of Search: What Marketers Need to Know",
      excerpt: "Explore the evolving landscape of search and how businesses can prepare for the AI-driven future.",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Future"
    },
    {
      title: "5 Common AI Visibility Mistakes to Avoid",
      excerpt: "Learn about the most common mistakes businesses make when trying to optimize for AI platforms.",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "Tips"
    },
    {
      title: "Measuring AI Visibility: Key Metrics to Track",
      excerpt: "Understand which metrics matter most when measuring your success in AI-powered search platforms.",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Analytics"
    }
  ]

  const categories = ["All", "Guide", "Analysis", "Case Study", "Future", "Tips", "Analytics"]

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            Resources & Blog
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Stay updated with the latest insights on AI visibility optimization, GEO strategies, and industry trends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                category === "All"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-black border border-gray-600 rounded-2xl p-4 sm:p-6 hover:border-gray-500 transition-colors">
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <Link
                href={`/resources/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-black border border-gray-600 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            Stay Updated
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
            Get the latest insights on AI visibility optimization delivered to your inbox. 
            No spam, just valuable content.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-600 transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3 sm:mt-4 px-4 sm:px-0">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center px-2 sm:px-0">Additional Resources</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-black border border-gray-600 rounded-lg p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-xs sm:text-sm text-gray-400">Comprehensive guides and API documentation</p>
            </div>
            
            <div className="bg-black border border-gray-600 rounded-lg p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-8a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-xs sm:text-sm text-gray-400">Join our community of AI visibility experts</p>
            </div>
            
            <div className="bg-black border border-gray-600 rounded-lg p-5 sm:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-xs sm:text-sm text-gray-400">Get help from our support team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
