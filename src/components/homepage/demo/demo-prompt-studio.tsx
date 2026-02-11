"use client"

import { Check } from 'lucide-react'
import { CATEGORIES, PROMPTS } from '@/hooks/use-prompt-studio-demo-controller'

interface DemoPromptStudioProps {
    activeTab: typeof CATEGORIES[number]
    modifyingPromptIndex?: number | null
    modifiedPromptText?: string | null
    isLightTheme: boolean
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
    isLightTheme,
    isAnimating
}: DemoPromptStudioProps) {

    // Theme-aware design tokens
    const bgClass = isLightTheme ? 'bg-white' : 'bg-black'
    const textClass = isLightTheme ? 'text-gray-900' : 'text-white'
    const activeTabBg = isLightTheme ? 'bg-gray-200' : 'bg-zinc-700'
    const activeTabText = isLightTheme ? 'text-gray-900' : 'text-white'
    const inactiveTabBg = isLightTheme ? 'bg-gray-100 hover:bg-gray-200' : 'bg-zinc-800 hover:bg-zinc-700' // Subtle
    const inactiveTabText = isLightTheme ? 'text-gray-600' : 'text-gray-400'
    
    // Prompts list styling
    const promptItemBg = isLightTheme ? 'bg-gray-50' : 'bg-zinc-900/50'
    const promptItemBorder = isLightTheme ? 'border-gray-100' : 'border-zinc-800'
    const promptText = isLightTheme ? 'text-gray-700' : 'text-gray-300'

    return (
        <div 
            className={`w-full h-full p-6 rounded-t-lg shadow-lg ${bgClass} flex flex-col select-none
                transition-all duration-700 ease-out
                ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
            `}
        >
            <h2 className={`text-2xl font-semibold text-center mt-4 mb-10 ${textClass}`}>
                Prompt Studio
            </h2>

            <div className="flex flex-col w-full h-full overflow-hidden">
                {/* Tabs / Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 px-2">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category}
                            data-tab={category}
                            className={`px-3.5 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-default whitespace-nowrap
                                ${activeTab === category 
                                    ? `${activeTabBg} ${activeTabText}` 
                                    : `${inactiveTabBg} ${inactiveTabText}`
                                }
                            `}
                        >
                            {CATEGORY_LABELS[category]}
                        </div>
                    ))}
                </div>

                {/* Prompts List */}
                <div className="flex-1 overflow-y-auto px-1 space-y-2.5 flex flex-col items-center">
                    <div className="w-[80%] space-y-2.5 ">
                    {PROMPTS[activeTab].map((prompt, index) => (
                        <div 
                            key={`${activeTab}-${index}`}
                            className={`flex items-start justify-between p-3 rounded-3xl border ${promptItemBg} ${promptItemBorder} animate-in fade-in slide-in-from-bottom-2 duration-300 w-full`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <p className={`text-sm ${promptText} leading-tight line-clamp-20 pr-2`}>
                                {activeTab === 'Generic' && index === modifyingPromptIndex && modifiedPromptText !== null
                                    ? modifiedPromptText 
                                    : prompt
                                }
                            </p>
                            <div data-check-index={index}>
                                <Check className={`w-4 h-4 shrink-0 ${isLightTheme ? 'text-gray-600' : 'text-zinc-500'}`} />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
