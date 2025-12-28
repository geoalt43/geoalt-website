import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { colorClasses } from '@/constants/colors'
import { format } from 'date-fns'

export const metadata: Metadata = {
    title: 'Blog | GEOAlt',
    description: 'Insights and strategies for optimizing your brand visibility in the age of AI search.',
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <div className="bg-brand-black min-h-screen flex flex-col relative overflow-hidden">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <main className="flex-grow pt-[140px] pb-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-20 relative">
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                The GEOAlt Blog
                            </span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Insights</span>
                        </h1>
                        <p className={`text-lg sm:text-x l ${colorClasses.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                            Expert analysis on Generative Engine Optimization, AI search trends, and the future of digital visibility.
                        </p>
                    </div>

                    {/* Featured Posts - Top 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {posts.slice(0, 2).map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative">
                                <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-white/20 transition-all duration-300">
                                    {post.image && (
                                        <div className="relative w-full h-64 md:h-80 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                                        </div>
                                    )}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                                        <div className="flex items-center gap-3 text-sm mb-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {post.tags?.[0] || 'Article'}
                                            </span>
                                            <span className="text-gray-400">{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                                        </div>
                                        <h2 className="font-bold text-white mb-4 group-hover:text-blue-400 transition-colors text-2xl md:text-3xl">
                                            {post.title}
                                        </h2>
                                        <p className={`${colorClasses.textMuted} flex-grow leading-relaxed text-base md:text-lg line-clamp-3`}>
                                            {post.description}
                                        </p>
                                        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-300">{post.author}</span>
                                            <span className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                Read Article
                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Section Divider */}
                    {posts.length > 2 && (
                        <div className="flex items-center gap-4 mb-12">
                            <h3 className="text-2xl font-bold text-white">More Stories</h3>
                            <div className="h-px bg-white/10 flex-grow" />
                        </div>
                    )}

                    {/* Recent Posts - Bottom 4 */}
                    {posts.length > 2 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.slice(2, 6).map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative">
                                    <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
                                        {post.image && (
                                            <div className="relative h-40 w-full overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                                <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                                            </div>
                                            <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                            <p className={`${colorClasses.textMuted} flex-grow line-clamp-2 text-xs leading-relaxed mb-4`}>
                                                {post.description}
                                            </p>
                                            <div className="flex items-center text-xs font-medium text-blue-400 mt-auto">
                                                Read more
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {posts.length === 0 && (
                        <div className="col-span-full text-center py-32 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <p className="text-white text-xl font-medium mb-2">No posts found</p>
                            <p className="text-gray-400">We&apos;re working on some fresh content. Check back soon!</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}
