"use client"

import { useState, useEffect, useRef } from 'react'

interface UseModelRegionDemoControllerProps {
    activeStep: number
    isVisible: boolean
    isDemoActive: boolean
    getModelElement?: (name: string) => HTMLElement | null
    getRegionInputElement?: () => HTMLElement | null
    getCountryElement?: (name: string) => HTMLElement | null
    getDropdownElement?: () => HTMLElement | null
    onComplete?: () => void
}

// Country list with flag emojis
const COUNTRIES = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Sweden', flag: '🇸🇪' },
    { name: 'Switzerland', flag: '🇨🇭' },
    { name: 'Spain', flag: '🇪🇸' },
]

export { COUNTRIES }

export function useModelRegionDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    getModelElement,
    getRegionInputElement,
    getCountryElement,
    getDropdownElement,
    onComplete
}: UseModelRegionDemoControllerProps) {

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
    const [isClicking, setIsClicking] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(false)
    const [selectedModels, setSelectedModels] = useState<string[]>(['ChatGPT'])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [dropdownScrollTop, setDropdownScrollTop] = useState(0)
    const [selectedRegion, setSelectedRegion] = useState<{ name: string; flag: string } | null>(null)
    const [isRegionInputActive, setIsRegionInputActive] = useState(false)
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

    const abortControllerRef = useRef<AbortController | null>(null)
    const hasCompleted = useRef(false)

    useEffect(() => {
        // Only run for Step 2
        if (!isDemoActive || !isVisible || activeStep !== 2) {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
                abortControllerRef.current = null
            }
            return
        }

        if (hasCompleted.current) return

        if (hasCompleted.current) return

        // Start Sequence
        const controller = new AbortController()
        abortControllerRef.current = controller

        // Reset state before starting
        setSelectedModels(['ChatGPT'])
        setIsCursorVisible(false)
        setIsDropdownOpen(false)
        setDropdownScrollTop(0)
        setSelectedRegion(null)
        setIsRegionInputActive(false)
        setHoveredCountry(null)

        // Helper for cancellable delay
        const delay = (ms: number, signal: AbortSignal) =>
            new Promise<void>((resolve, reject) => {
                const timeoutId = setTimeout(resolve, ms)
                signal.addEventListener('abort', () => {
                    clearTimeout(timeoutId)
                    reject(new DOMException('Aborted', 'AbortError'))
                })
            })

        // Helper to find an element with retry
        const findElementWithRetry = async (
            finder: () => HTMLElement | null | undefined,
            signal: AbortSignal,
            attempts = 8
        ): Promise<HTMLElement | null> => {
            for (let i = 0; i < attempts; i++) {
                const el = finder()
                if (el) return el
                await delay(100, signal)
            }
            return null
        }

        // Animation Sequence
        const runStep2Sequence = async (signal: AbortSignal) => {
            try {
                // Wait before starting
                await delay(800, signal)

                // --- 1. Move cursor to Grok button ---
                setIsCursorVisible(true)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })
                await delay(150, signal)

                const grokEl = await findElementWithRetry(
                    () => getModelElement?.('Grok'),
                    signal
                )

                if (grokEl) {
                    const rect = grokEl.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(900, signal)

                // Pause before clicking
                await delay(300, signal)

                // Click Grok
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setSelectedModels(prev => [...prev, 'Grok'])
                await delay(600, signal)

                // --- 2. Move cursor to Gemini button ---
                const geminiEl = await findElementWithRetry(
                    () => getModelElement?.('Gemini'),
                    signal
                )

                if (geminiEl) {
                    const rect = geminiEl.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(900, signal)

                // Pause before clicking
                await delay(300, signal)

                // Click Gemini
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setSelectedModels(prev => [...prev, 'Gemini'])
                await delay(600, signal)

                // --- 3. Move cursor to Region input ---
                const regionInput = await findElementWithRetry(
                    () => getRegionInputElement?.(),
                    signal
                )

                if (regionInput) {
                    const rect = regionInput.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(900, signal)

                // Click Region input
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setIsRegionInputActive(true)
                await delay(300, signal)

                // Open dropdown
                setIsDropdownOpen(true)
                await delay(600, signal)

                // --- 4. Scroll dropdown to find India ---
                // India is at index 8, each item ~40px, dropdown visible ~160px
                // Need to scroll down to make India visible
                const dropdownEl = await findElementWithRetry(
                    () => getDropdownElement?.(),
                    signal
                )

                // Move cursor into dropdown area
                if (dropdownEl) {
                    const rect = dropdownEl.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(400, signal)

                // Smooth scrolling animation
                // India at index 8, ~30px per item (py-1.5), dropdown 96px visible
                // Scroll enough to bring India near the top
                const targetScroll = 240
                const scrollSteps = 18
                const scrollDelay = 80
                for (let i = 1; i <= scrollSteps; i++) {
                    await delay(scrollDelay, signal)
                    // Ease-out: faster at start, slower at end
                    const progress = i / scrollSteps
                    const eased = 1 - Math.pow(1 - progress, 3)
                    setDropdownScrollTop(targetScroll * eased)
                }
                await delay(400, signal)

                // --- 5. Click on India ---
                const indiaEl = await findElementWithRetry(
                    () => getCountryElement?.('India'),
                    signal
                )

                if (indiaEl) {
                    const rect = indiaEl.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                // Show hover effect on India
                setHoveredCountry('India')
                await delay(600, signal)

                // Pause on India
                await delay(300, signal)

                // Click India
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                await delay(100, signal)

                // Select India and close dropdown
                setHoveredCountry(null)
                setSelectedRegion({ name: 'India', flag: '🇮🇳' })
                setIsDropdownOpen(false)
                setIsRegionInputActive(false)
                await delay(2000, signal)

                // --- 6. Complete ---
                // Removed reset to persist state
                // setSelectedModels(['ChatGPT'])
                // setIsCursorVisible(false)
                // ...

                await delay(800, signal)

                hasCompleted.current = true
                if (onComplete) {
                    onComplete()
                }

            } catch (error: unknown) {
                if (error instanceof Error && error.name === 'AbortError') {
                    // Expected cleanup
                } else {
                    console.error("Animation error:", error)
                }
            }
        }

        runStep2Sequence(controller.signal)

        return () => {
            controller.abort()
        }
    }, [activeStep, isVisible, isDemoActive, getModelElement, getRegionInputElement, getCountryElement, getDropdownElement, onComplete])

    return {
        cursorPos,
        isClicking,
        isCursorVisible,
        selectedModels,
        isDropdownOpen,
        dropdownScrollTop,
        selectedRegion,
        isRegionInputActive,
        hoveredCountry
    }
}
