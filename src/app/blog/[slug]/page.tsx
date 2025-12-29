import { TableOfContents } from '@/components/blog/TableOfContents'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { extractHeadings } from '@/lib/toc'
import { format } from 'date-fns'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidElement } from 'react'
import ReactMarkdown from 'react-markdown'

function getText(children: any): string {
    if (typeof children === 'string') return children
    if (typeof children === 'number') return children.toString()
    if (Array.isArray(children)) return children.map((child) => getText(child)).join('')
    if (isValidElement(children) && (children.props as any).children) return getText((children.props as any).children)
    return ''
}

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

    const headings = extractHeadings(post.content)

    return (
        <div className="min-h-screen bg-brand-black flex flex-col">
            <Navbar />

            <header className="mb-10 text-center max-w-2xl mx-auto pt-[120px]">
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
                        <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-white font-medium">{post.author}</p>
                        <p className="text-xs text-gray-400">Author</p>
                    </div>
                </div>
            </header>


            <main className="flex-grow pb-20 bg-black z-10 pt-8 border-t border-[#1e1e1e]">
                <div className="max-w-[70rem] mx-auto px-4 sm:px-6 md:px-8 flex lg:gap-12 relative">

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

                </div>
                <div className="max-w-[70rem] mx-auto px-4 sm:px-6 md:px-8 flex lg:gap-12 relative">

                    <TableOfContents headings={headings} />

                    <div className="min-w-0 flex-1 mx-auto">
                        <article className="mb-20">
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
                    prose-headings:text-white prose-headings:font-medium prose-headings:scroll-mt-32
                    prose-p:text-gray-300 prose-p:leading-8
                    prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white
                    prose-ul:text-gray-300 prose-ol:text-gray-300
                    prose-li:marker:text-blue-500
                    prose-blockquote:border-l-blue-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                    prose-code:text-blue-300 prose-code:bg-blue-900/30 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                    ">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ children }) => {
                                            const text = getText(children)
                                            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                                            return <h1 className='text-xl w-full' id={id}>{children}</h1>
                                        },
                                        h2: ({ children }) => {
                                            const text = getText(children)
                                            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                                            return <h2 className='text-xl w-full mt-12 font-bold mb-2' id={id}>{children}</h2>
                                        },
                                        h3: ({ children }) => {
                                            const text = getText(children)
                                            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
                                            return <h3 className='text-base w-full' id={id}>{children}</h3>
                                        },
                                        ul: ({ children }) => {
                                            return <ul className='list-disc list-inside my-4'>{children}</ul>
                                        },
                                        ol: ({ children }) => {
                                            return <ol className='list-decimal list-inside my-4'>{children}</ol>
                                        },
                                        blockquote: ({ children }) => {
                                            return <blockquote className='my-4 border-l-blue-500 border-l-4 p-4'>{children}</blockquote>
                                        },
                                        img: ({ src, alt }) => {
                                            return <Image src={src as string} alt={alt as string} width={1000} height={1000} className='w-full h-auto' />
                                        },
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>
                        </article>
                    </div>
                </div>

            </main>
            <main className="flex-grow pb-20 backdrop-blur-xs z-10 pt-8 border-t border-[#1e1e1e]">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
                    <div className="flex items-center gap-4 mb-12">
                        <h3 className="text-2xl font-bold text-white">More Stories</h3>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getAllPosts()
                            .filter((p) => p.slug !== post.slug)
                            .slice(0, 3)
                            .map((relatedPost) => (
                                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group relative">
                                    <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
                                        {relatedPost.image && (
                                            <div className="relative h-40 w-full overflow-hidden">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                                <span>{format(new Date(relatedPost.date), 'MMM d, yyyy')}</span>
                                            </div>
                                            <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h2>
                                            <p className="text-gray-400 flex-grow line-clamp-2 text-xs leading-relaxed mb-4">
                                                {relatedPost.description}
                                            </p>
                                            <div className="flex items-center text-xs font-medium text-blue-400 mt-auto">
                                                Read more
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
