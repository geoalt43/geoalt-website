"use client"

import { useState, useEffect, useRef, RefObject } from 'react'

interface UseDemoControllerProps {
    activeStep: number
    isVisible: boolean
    isDemoActive: boolean
    inputRefs: {
        brand: RefObject<HTMLInputElement | null>
        website: RefObject<HTMLInputElement | null>
        aliases: RefObject<HTMLTextAreaElement | null>
    }
    onComplete?: () => void
}

export function useDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    inputRefs,
    onComplete
}: UseDemoControllerProps) {

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
    const [isClicking, setIsClicking] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(false)
    const [typingState, setTypingState] = useState({
        brand: '',
        website: '',
        aliases: ''
    })
    const [activeField, setActiveField] = useState<'brand' | 'website' | 'aliases' | null>(null)

    const abortControllerRef = useRef<AbortController | null>(null)

    // Effect to manage sequence lifecycle
    useEffect(() => {
        // Stop if demo inactive or not visible or not Step 0
        if (!isDemoActive || !isVisible || activeStep !== 0) {
            // Cancel any running sequence
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
                abortControllerRef.current = null
            }

            // Reset state
            if (activeStep !== 0) {
                setTypingState({ brand: '', website: '', aliases: '' })
                setActiveField(null)
                setCursorPos({ x: -100, y: -100 })
                setIsCursorVisible(false)
            }
            return
        }

        // Start Sequence
        const controller = new AbortController()
        abortControllerRef.current = controller

        // Reset state before starting
        setTypingState({ brand: '', website: '', aliases: '' })
        setActiveField(null)
        setIsCursorVisible(false)

        // Helper for cancellable delay
        const delay = (ms: number, signal: AbortSignal) =>
            new Promise<void>((resolve, reject) => {
                const timeoutId = setTimeout(resolve, ms)
                signal.addEventListener('abort', () => {
                    clearTimeout(timeoutId)
                    reject(new DOMException('Aborted', 'AbortError'))
                })
            })

        // Helper for typing simulation (cursor hidden during typing)
        const typeText = async (
            text: string,
            field: 'brand' | 'website' | 'aliases',
            signal: AbortSignal
        ) => {
            for (let i = 0; i < text.length; i++) {
                await delay(100 + Math.random() * 50, signal)
                setTypingState(prev => ({
                    ...prev,
                    [field]: prev[field] + text[i]
                }))
            }
        }

        // Animation Sequence for Step 0 (Brand)
        const runStep0Sequence = async (signal: AbortSignal) => {
            try {
                // Find inputs
                const brandInput = inputRefs.brand.current
                const websiteInput = inputRefs.website.current
                const aliasesInput = inputRefs.aliases.current

                if (!brandInput || !websiteInput || !aliasesInput) return

                // Wait before starting
                await delay(800, signal)

                // --- 1. Move to Brand ---
                const brandRect = brandInput.getBoundingClientRect()

                // Show cursor and start from off-screen
                setIsCursorVisible(true)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })
                await delay(150, signal)

                // Move to target
                setCursorPos({ x: brandRect.left + 60, y: brandRect.top + 18 })
                await delay(900, signal)

                // Click
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setActiveField('brand')
                await delay(300, signal)

                // Hide cursor during typing
                setIsCursorVisible(false)
                await delay(200, signal)

                // Type
                await typeText('Nike', 'brand', signal)
                await delay(700, signal)

                // --- 2. Move to Website ---
                setIsCursorVisible(true)
                const websiteRect = websiteInput.getBoundingClientRect()
                setCursorPos({ x: websiteRect.left + 80, y: websiteRect.top + 18 })
                await delay(900, signal)

                // Click
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setActiveField('website')
                await delay(300, signal)

                // Hide cursor during typing
                setIsCursorVisible(false)
                await delay(200, signal)

                // Type
                await typeText('www.nike.com', 'website', signal)
                await delay(700, signal)

                // --- 3. Move to Aliases ---
                setIsCursorVisible(true)
                const aliasesRect = aliasesInput.getBoundingClientRect()
                setCursorPos({ x: aliasesRect.left + 60, y: aliasesRect.top + 30 })
                await delay(900, signal)

                // Click
                setIsClicking(true)
                await delay(200, signal)
                setIsClicking(false)
                setActiveField('aliases')
                await delay(300, signal)

                // Hide cursor during typing
                setIsCursorVisible(false)
                await delay(200, signal)

                // Type
                await typeText('Nike Shoes, Nike Sportswear', 'aliases', signal)
                await delay(1500, signal)

                // Reset for loop
                setActiveField(null)
                setTypingState({ brand: '', website: '', aliases: '' })
                setIsCursorVisible(false)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })

                await delay(800, signal)
                // Instead of looping, call onComplete if provided
                if (onComplete) {
                    onComplete()
                } else {
                    runStep0Sequence(signal)
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
        runStep0Sequence(controller.signal)

        return () => {
            controller.abort()
        }
    }, [activeStep, isVisible, isDemoActive,
        inputRefs.brand, inputRefs.website, inputRefs.aliases,
        onComplete
    ])

    return {
        cursorPos,
        isClicking,
        isCursorVisible,
        typingState,
        activeField
    }
}
