"use client"

import { Check } from 'lucide-react'
import { CATEGORIES, PROMPTS } from '@/hooks/use-prompt-studio-demo-controller'

interface DemoPromptStudioProps {
    activeTab: typeof CATEGORIES[number]
    modifyingPromptIndex?: number | null
    modifiedPromptText?: string | null
    isAnimating: boolean
}

const CATEGORY_LABELS: Record<string, string> = {
    'Generic': 'Generic',
    'Feature-Specific': 'Feature-Spe...',
    'Use-case Driven': 'Use-case D...',
    'Emerging Trends': 'Emerging Tr...',
    'Competitors': 'Competitors'
}

export function DemoPromptStudio({
    activeTab,
    modifyingPromptIndex,
    modifiedPromptText,
    isAnimating
}: DemoPromptStudioProps) {

    return (
        <div 
            className={`w-full h-full p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg bg-white dark:bg-black flex flex-col select-none
                transition-all duration-700 ease-out
                ${isAnimating ? 'opacity-100' : 'opacity-0'}
            `}
        >
            <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-center mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-6 md:mb-10 text-gray-900 dark:text-white">
                Prompt Studio
            </h2>

            <div className="flex flex-col w-full h-full overflow-hidden">
                {/* Tabs / Categories */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category}
                            data-tab={category}
                            className={`px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-colors duration-200 cursor-default whitespace-nowrap
                                ${activeTab === category 
                                    ? 'bg-gray-200 dark:bg-zinc-700 text-gray-900 dark:text-white' 
                                    : 'bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-600 dark:text-gray-400'}
                            `}
                        >
                            {CATEGORY_LABELS[category]}
                        </div>
                    ))}
                </div>

                {/* Prompts List */}
                <div className="flex-1 overflow-y-auto px-1 space-y-1.5 sm:space-y-2 md:space-y-2.5 flex flex-col items-center">
                    <div className="w-[95%] sm:w-[85%] md:w-[80%] space-y-1.5 sm:space-y-2 md:space-y-2.5">
                    {PROMPTS[activeTab].map((prompt, index) => (
                        <div 
                            key={`${activeTab}-${index}`}
                            className="flex items-start justify-between p-2 sm:p-2.5 md:p-3 rounded-2xl sm:rounded-3xl border bg-gray-50 dark:bg-zinc-900/50 border-gray-100 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-2 duration-300 w-full"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-tight line-clamp-20 pr-1 sm:pr-2">
                                {activeTab === 'Generic' && index === modifyingPromptIndex && modifiedPromptText !== null
                                    ? modifiedPromptText 
                                    : prompt
                                }
                            </p>
                            <div data-check-index={index}>
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0 text-gray-600 dark:text-zinc-500" />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
