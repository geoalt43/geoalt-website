import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { format } from 'date-fns'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.title} | GEOAlt Blog`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://geoalt.com/blog/${slug}`,
            images: [
                {
                    url: post.image || '/images/img-2.jpeg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-brand-black flex flex-col">
            <Navbar />

            <main className="flex-grow pt-[120px] pb-20">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                    >
                        <svg
                            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>

                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-6">
                            <span className="bg-white/10 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-white">
                                {post.tags?.[0] || 'Article'}
                            </span>
                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-medium">{post.author}</p>
                                <p className="text-xs text-gray-400">Author</p>
                            </div>
                        </div>
                    </header>

                    {post.image && (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-white prose-headings:font-medium 
            prose-p:text-gray-300 prose-p:leading-8
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:marker:text-blue-500
            prose-blockquote:border-l-blue-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            prose-code:text-blue-300 prose-code:bg-blue-900/30 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            ">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}
