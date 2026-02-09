"use client"

import { useState, useEffect, RefObject } from 'react'

interface UseVisibilityObserverOptions {
    threshold?: number
    rootMargin?: string
}

export function useVisibilityObserver(
    ref: RefObject<HTMLElement | null>,
    options: UseVisibilityObserverOptions = { threshold: 0.5 }
) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: options.threshold,
                rootMargin: options.rootMargin
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [ref, options.threshold, options.rootMargin])

    return isVisible
}
