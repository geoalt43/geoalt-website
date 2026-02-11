"use client"

import { useState, useEffect, useRef } from 'react'

interface UsePromptStudioDemoControllerProps {
    activeStep: number
    isVisible: boolean
    isDemoActive: boolean
    getTabElement?: (category: string) => HTMLElement | null
    getCheckElement?: (index: number) => HTMLElement | null
    onComplete?: () => void
}

const CATEGORIES = [
    'Generic',
    'Feature-Specific',
    'Use-case Driven',
    'Emerging Trends',
    'Competitors'
] as const

type Category = typeof CATEGORIES[number]

const PROMPTS: Record<Category, string[]> = {
    'Generic': [
        "Who offers the best lifestyle sneakers for everyday wear?",
        "Best workout clothes for women compared to competitors?",
        "Which basketball sneaker offers the best performance for kids?",
        "Best athletic apparel for outdoor activities?",
        "What's the best running shoe for marathon training?"
    ],
    'Feature-Specific': [
        "Compare battery life of top 5 rugged smartphones.",
        "Which CRM offers the best AI-based lead scoring?",
        "What are the noise-cancellation capabilities of Sony vs Bose?",
        "List electric cars with range over 400 miles.",
        "Analyze safety ratings of mid-size SUVs 2024."
    ],
    'Use-case Driven': [
        "Best project management tools for remote agile teams.",
        "Top budget-friendly laptops for graphic design students.",
        "Most durable hiking boots for tropical climates.",
        "Software for automating instagram marketing for small business.",
        "Best credit cards for frequent international travelers."
    ],
    'Emerging Trends': [
        "Impact of generative AI on customer service jobs in 2025.",
        "Growth of sustainable fashion brands in Europe.",
        "Adoption rates of VR headsets in education.",
        "Rise of plant-based protein alternatives in Asia.",
        "Trends in remote work security protocols."
    ],
    'Competitors': [
        "How does ClickUp pricing compare to Monday.com?",
        "SWOT analysis of Tesla vs BYD in EV market.",
        "Feature gap analysis: Shopify vs WooCommerce.",
        "Market share of Coca-Cola vs Pepsi in South America.",
        "Customer sentiment analysis of Uber vs Lyft."
    ]
}

export { CATEGORIES, PROMPTS }

export function usePromptStudioDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    getTabElement,
    getCheckElement,
    onComplete
}: UsePromptStudioDemoControllerProps) {

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
    const [isClicking, setIsClicking] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(false)
    const [activeTab, setActiveTab] = useState<Category>('Generic')
    const [modifyingPromptIndex, setModifyingPromptIndex] = useState<number | null>(null)
    const [modifiedPromptText, setModifiedPromptText] = useState<string | null>(null)

    const abortControllerRef = useRef<AbortController | null>(null)
    const hasCompleted = useRef(false)

    useEffect(() => {
        // Only run for Step 3
        if (!isDemoActive || !isVisible || activeStep !== 3) {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
                abortControllerRef.current = null
            }
            return
        }

        if (hasCompleted.current) return

        const controller = new AbortController()
        abortControllerRef.current = controller

        // Reset state
        setActiveTab('Generic')
        setIsCursorVisible(false)
        setModifyingPromptIndex(null)
        setModifiedPromptText(null)

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

        const runStep3Sequence = async (signal: AbortSignal) => {
            try {
                // Wait before starting
                await delay(800, signal)

                // Show cursor
                setIsCursorVisible(true)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })
                await delay(150, signal)

                // Sequence: Move to Feature-Specific -> Click -> Move to Use-case Driven -> Click -> Reset

                // --- 1. Move to Feature-Specific ---
                const featureTab = await findElementWithRetry(
                    () => getTabElement?.('Feature-Specific'),
                    signal
                )

                if (featureTab) {
                    const rect = featureTab.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(1000, signal)

                // Click
                setIsClicking(true)
                setActiveTab('Feature-Specific') // Immediate feedback or slightly delayed?
                await delay(200, signal)
                setIsClicking(false)

                await delay(1500, signal) // Let user read

                // --- 2. Move to Emerging Trends ---
                const emergingTab = await findElementWithRetry(
                    () => getTabElement?.('Emerging Trends'),
                    signal
                )

                if (emergingTab) {
                    const rect = emergingTab.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(800, signal)

                // Click
                setIsClicking(true)
                setActiveTab('Emerging Trends')
                await delay(200, signal)
                setIsClicking(false)

                await delay(1500, signal)

                // --- 3. Move to Competitors ---
                const competitorsTab = await findElementWithRetry(
                    () => getTabElement?.('Competitors'),
                    signal
                )

                if (competitorsTab) {
                    const rect = competitorsTab.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(800, signal)

                // Click
                setIsClicking(true)
                setActiveTab('Competitors')
                await delay(200, signal)
                setIsClicking(false)

                await delay(2000, signal)

                // End sequence
                setIsCursorVisible(false)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })
                // --- 4. Return to Generic ---
                const genericTab = await findElementWithRetry(
                    () => getTabElement?.('Generic'),
                    signal
                )

                if (genericTab) {
                    const rect = genericTab.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(800, signal)

                // Click
                setIsClicking(true)
                setActiveTab('Generic')
                await delay(200, signal)
                setIsClicking(false)

                await delay(1000, signal)

                // --- 5. Modify Prompt Logic ---
                // Target the second check icon (index 1)
                const checkIcon = await findElementWithRetry(
                    () => getCheckElement?.(1),
                    signal
                )

                if (checkIcon) {
                    const rect = checkIcon.getBoundingClientRect()
                    setCursorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
                }
                await delay(1000, signal)

                // Click to "edit" (simulated)
                setIsClicking(true)
                // Set initial text to original prompt
                setModifyingPromptIndex(1)
                setModifiedPromptText(PROMPTS['Generic'][1])
                await delay(300, signal)
                setIsClicking(false)

                await delay(800, signal)

                // Simulate Typing
                const originalText = PROMPTS['Generic'][1]
                const newText = "Top rated running shoes for casual wear comparison?"

                // Backspace effect
                for (let i = originalText.length; i >= 0; i--) {
                    await delay(25, signal) // fast backspace
                    setModifiedPromptText(originalText.substring(0, i))
                }

                await delay(300, signal)

                // Typing effect
                for (let i = 0; i <= newText.length; i++) {
                    await delay(40, signal)
                    setModifiedPromptText(newText.substring(0, i))
                }

                await delay(2000, signal)

                // End sequence
                setIsCursorVisible(false)
                setCursorPos({ x: window.innerWidth, y: window.innerHeight })
                setActiveTab('Generic') // Reset to Generic
                setModifyingPromptIndex(null)
                setModifiedPromptText(null)
                await delay(500, signal)

                if (onComplete) {
                    onComplete()
                }

                hasCompleted.current = true

            } catch (error: unknown) {
                if (error instanceof Error && error.name === 'AbortError') {
                    // Expected cleanup
                } else {
                    console.error("Animation error:", error)
                }
            }
        }

        runStep3Sequence(controller.signal)

        return () => {
            controller.abort()
        }
    }, [activeStep, isVisible, isDemoActive, getTabElement, onComplete])

    return {
        cursorPos,
        isClicking,
        isCursorVisible,
        activeTab,
        modifyingPromptIndex,
        modifiedPromptText
    }
}
