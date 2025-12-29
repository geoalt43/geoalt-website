'use client'

import { useEffect, useState } from 'react'
import { Heading } from '@/lib/toc'
import { cn } from '@/lib/utils'

interface TableOfContentsProps {
    headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '0px 0px -80% 0px' }
        )

        headings.forEach((heading) => {
            const element = document.getElementById(heading.slug)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.slug)
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [headings])

    if (headings.length === 0) return null

    return (
        <nav className="border p-6 rounded-xl border-[#1e1e1e] pr-8">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                On this page
            </h4>
            <ul className="space-y-3 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.slug}
                        style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                    >
                        <a
                            href={`#${heading.slug}`}
                            className={cn(
                                "block transition-colors hover:text-blue-400",
                                activeId === heading.slug
                                    ? "text-blue-400 font-medium"
                                    : "text-gray-400"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(heading.slug)?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
