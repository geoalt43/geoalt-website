"use client"

import { useState, useEffect, useRef, RefObject } from 'react'

interface Competitor {
    name: string
    isSelected: boolean
}

interface UseCompetitorsDemoControllerProps {
    activeStep: number
    isVisible: boolean
    isDemoActive: boolean
    inputRefs: {
        search: RefObject<HTMLInputElement | null>
        url: RefObject<HTMLInputElement | null>
    }
    getCompetitorElement?: (name: string) => HTMLElement | null
    onComplete?: () => void
}

// Initial competitors list
const INITIAL_COMPETITORS: Competitor[] = [
    { name: 'Puma', isSelected: true },
    { name: 'Under Armour', isSelected: true },
    { name: 'Reebok', isSelected: true },
    { name: 'New Balance', isSelected: true },
    { name: 'ASICS', isSelected: false },
    { name: 'Skechers', isSelected: false },
    { name: 'Converse', isSelected: false },
    { name: 'Vans', isSelected: false },
    { name: 'Fila', isSelected: false },
]

export function useCompetitorsDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    inputRefs,
    getCompetitorElement,
    onComplete
}: UseCompetitorsDemoControllerProps) {

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
    const [isClicking, setIsClicking] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [urlValue, setUrlValue] = useState('')
    const [activeField, setActiveField] = useState<'search' | 'url' | null>(null)
    const [competitors, setCompetitors] = useState<Competitor[]>(INITIAL_COMPETITORS)
    const [showAdidas, setShowAdidas] = useState(false)
    const [adidasSelected, setAdidasSelected] = useState(false)

    const abortControllerRef = useRef<AbortController | null>(null)

    // Effect to manage sequence lifecycle
    useEffect(() => {
        // Only run for Step 1
        if (!isDemoActive || !isVisible || activeStep !== 1) {
            // Cancel any running sequence
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
                abortControllerRef.current = null
            }

            // Reset state
            if (activeStep !== 1) {
                setSearchValue('')
                setUrlValue('')
                setActiveField(null)
                setCursorPos({ x: -100, y: -100 })
                setIsCursorVisible(false)
                setShowAdidas(false)
                setAdidasSelected(false)
                setCompetitors(INITIAL_COMPETITORS)
            }
            return
        }

        // Start Sequence
        const controller = new AbortController()
        abortControllerRef.current = controller

        // Reset state before starting
        setSearchValue('')
        setUrlValue('')
        setActiveField(null)
        setIsCursorVisible(false)
        setShowAdidas(false)
        setAdidasSelected(false)
        setCompetitors(INITIAL_COMPETITORS)

        // Helper for cancellable delay
        const delay = (ms: number, signal: AbortSignal) =>
            new Promise<void>((resolve, reject) => {
                const timeoutId = setTimeout(resolve, ms)
                signal.addEventListener('abort', () => {
                    clearTimeout(timeoutId)
                    reject(new DOMException('Aborted', 'AbortError'))
                })
            })

        // Helper for typing simulation
        const typeText = async (
            text: string,
            setter: React.Dispatch<React.SetStateAction<string>>,
            signal: AbortSignal,
            baseDelay = 100
        ) => {
            for (let i = 0; i < text.length; i++) {
                await delay(baseDelay + Math.random() * 50, signal)
                setter(prev => prev + text[i])
            }
        }

        // Helper to find empty spot or center of element safely
        const findElementWithRetry = async (name: string, signal: AbortSignal, attempts = 5): Promise<HTMLElement | null> => {
            for (let i = 0; i < attempts; i++) {
                // Ensure getCompetitorElement is using current ref
                const el = getCompetitorElement?.(name)
                if (el) return el
                await delay(100, signal)
            }
            return null
        }

        // Animation Sequence
        const runStep1Sequence = async (signal: AbortSignal) => {
            try {
                const searchInput = inputRefs.search.current
                const urlInput = inputRefs.url.current

                if (!searchInput || !urlInput) return

                // Wait before starting
                await delay(800, signal)

                // --- 1. Move cursor to search input ---
                const searchRect = searchInput.getBoundingClientRect()

                // Show cursor from off-screen
                setIsCursorVisible(true)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })
                await delay(150, signal)

                // Move to search input
                setCursorPos({ x: searchRect.left + 100, y: searchRect.top + 18 })
                await delay(900, signal)

                // Click
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setActiveField('search')
                await delay(300, signal)

                // Hide cursor during typing
                setIsCursorVisible(false)
                await delay(200, signal)

                // Type "Adidas"
                await typeText('Adidas', setSearchValue, signal, 200)
                await delay(600, signal)

                // --- 2. Move to URL Input ---
                setIsCursorVisible(true)
                const urlRect = urlInput.getBoundingClientRect()
                setCursorPos({ x: urlRect.left + 100, y: urlRect.top + 20 })
                await delay(800, signal)

                // Click
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setActiveField('url')
                await delay(300, signal)

                // Hide cursor during typing
                setIsCursorVisible(false)
                await delay(200, signal)

                // Type URL
                await typeText('www.adidas.com', setUrlValue, signal)
                await delay(600, signal)

                // --- 3. Show Adidas & Select it ---
                // Show Adidas in the competitors list (with plus icon, unselected)
                setShowAdidas(true)
                setAdidasSelected(false)
                await delay(100, signal) // Use small delay to let render happen

                // Move cursor to Adidas chip
                setIsCursorVisible(true)

                // Try to find the new element
                const adidasElement = await findElementWithRetry('Adidas', signal)

                if (adidasElement) {
                    const adidasRect = adidasElement.getBoundingClientRect()
                    // Target center of chip
                    setCursorPos({ x: adidasRect.left + adidasRect.width / 2, y: adidasRect.top + adidasRect.height / 2 })
                } else {
                    // Fallback
                    setCursorPos({ x: searchRect.left + 50, y: searchRect.bottom + 120 })
                }
                await delay(800, signal)

                // Click to select Adidas
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                await delay(100, signal)

                // Adidas becomes selected (check icon)
                setAdidasSelected(true)
                await delay(2000, signal)

                // Reset for loop
                setActiveField(null)
                setSearchValue('')
                setUrlValue('')
                setShowAdidas(false)
                setAdidasSelected(false)
                setIsCursorVisible(false)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })

                await delay(800, signal)

                // Instead of looping, call onComplete if provided
                if (onComplete) {
                    onComplete()
                } else {
                    runStep1Sequence(signal)
                }

            } catch (error: unknown) {
                if (error instanceof Error && error.name === 'AbortError') {
                    // Expected cleanup
                } else {
                    console.error("Animation error:", error)
                }
            }
        }

        // Run
        runStep1Sequence(controller.signal)

        return () => {
            controller.abort()
        }
    }, [activeStep, isVisible, isDemoActive, inputRefs.search, inputRefs.url, getCompetitorElement, onComplete])

    // Build final competitors list including Adidas if showing
    const displayCompetitors: Competitor[] = showAdidas
        ? [{ name: 'Adidas', isSelected: adidasSelected }, ...competitors]
        : competitors

    return {
        cursorPos,
        isClicking,
        isCursorVisible,
        searchValue,
        urlValue,
        activeField,
        competitors: displayCompetitors
    }
}
