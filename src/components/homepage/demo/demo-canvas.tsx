"use client"

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useVisibilityObserver } from '@/hooks/use-visibility-observer'
import { useDemoController } from '@/hooks/use-demo-controller'
import { useCompetitorsDemoController } from '@/hooks/use-competitors-demo-controller'
import { FakeCursor } from './fake-cursor'
import { DemoAddBrand } from './demo-add-brand'
import { DemoAddCompetitors } from './demo-add-competitors'

const DEMO_MODE = true

interface DemoCanvasProps {
  activeStep: number
  isLightTheme: boolean
  tabData: {
    id: string
    title: string
    imageLight: string
    imageDark: string
    darkDropShadow?: boolean
  }
  onStepComplete?: () => void
}

export function DemoCanvas({ activeStep, isLightTheme, tabData, onStepComplete }: DemoCanvasProps) {
  // 1. Visibility & Activation
  const containerRef = useRef<HTMLDivElement>(null)
  const competitorsContainerRef = useRef<HTMLDivElement>(null)
  const isVisible = useVisibilityObserver(containerRef, { threshold: 0.5 })
  const [isDemoActive, setIsDemoActive] = useState(DEMO_MODE)

  // 2. Refs for Inputs - Step 0 (Brand)
  const brandRef = useRef<HTMLInputElement>(null)
  const websiteRef = useRef<HTMLInputElement>(null)
  const aliasesRef = useRef<HTMLTextAreaElement>(null)
  
  const step0InputRefs = {
    brand: brandRef,
    website: websiteRef,
    aliases: aliasesRef
  }

  // 3. Refs for Inputs - Step 1 (Competitors)
  const competitorSearchRef = useRef<HTMLInputElement>(null)
  const competitorUrlRef = useRef<HTMLInputElement>(null)
  
  const step1InputRefs = {
    search: competitorSearchRef,
    url: competitorUrlRef
  }

  // Helper to get competitor element by name
  const getCompetitorElement = useCallback((name: string): HTMLElement | null => {
    if (!competitorsContainerRef.current) return null
    return competitorsContainerRef.current.querySelector(`[data-competitor="${name}"]`)
  }, [])

  // 4. Controllers
  const step0Controller = useDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    inputRefs: step0InputRefs,
    onComplete: activeStep === 0 ? onStepComplete : undefined
  })

  const step1Controller = useCompetitorsDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    inputRefs: step1InputRefs,
    getCompetitorElement,
    onComplete: activeStep === 1 ? onStepComplete : undefined
  })

  // 5. Interaction Handler
  const handleUserInteraction = () => {
    if (isDemoActive) {
      setIsDemoActive(false)
    }
  }

  // Get current controller based on step
  const currentCursorPos = activeStep === 0 ? step0Controller.cursorPos : step1Controller.cursorPos
  const currentIsClicking = activeStep === 0 ? step0Controller.isClicking : step1Controller.isClicking
  const currentIsCursorVisible = activeStep === 0 ? step0Controller.isCursorVisible : step1Controller.isCursorVisible

  return (
    <div 
      ref={containerRef} 
      className="absolute top-[5%] left-[5%] right-[5%] bottom-0 z-10 flex items-start justify-center"
    >
      <div className={`relative w-full h-full flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* STEP 0: Add Your Brand */}
        {activeStep === 0 && (
          <div className="relative z-20 w-full h-full flex items-center justify-center overflow-hidden">
            <DemoAddBrand 
              brandValue={step0Controller.typingState.brand}
              websiteValue={step0Controller.typingState.website}
              aliasesValue={step0Controller.typingState.aliases}
              activeField={step0Controller.activeField}
              inputRefs={step0InputRefs}
              isLightTheme={isLightTheme}
              onUserInteraction={handleUserInteraction}
              isDemoActive={isDemoActive}
              isAnimating={isVisible}
            />
          </div>
        )}

        {/* STEP 1: Add Competitors */}
        {activeStep === 1 && (
          <div 
            ref={competitorsContainerRef}
            className="relative z-20 w-full h-full flex items-center justify-center overflow-hidden"
          >
            <DemoAddCompetitors 
              searchValue={step1Controller.searchValue}
              urlValue={step1Controller.urlValue}
              activeField={step1Controller.activeField}
              competitors={step1Controller.competitors}
              inputRefs={step1InputRefs}
              isLightTheme={isLightTheme}
              isAnimating={isVisible}
            />
          </div>
        )}

        {/* STEPS 2-3: Static Fallback (for now) */}
        {activeStep >= 2 && (
          <div className={`w-full max-w-[90%] lg:max-w-[96%] h-fit max-h-full rounded-lg overflow-hidden relative shadow-2xl ${
            isLightTheme ? 'bg-white' : 'bg-[#121212]'
          }`}>
             <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px]">
               <Image
                 src={isLightTheme ? tabData.imageLight : tabData.imageDark}
                 alt={tabData.title}
                 fill
                 className={`object-contain object-top ${
                   tabData.darkDropShadow && !isLightTheme 
                     ? 'drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
                     : ''
                 }`}
               />
             </div>
          </div>
        )}

        {/* Cursor Overlay - shared across steps */}
        {isDemoActive && isVisible && (activeStep === 0 || activeStep === 1) && (
          <FakeCursor 
            x={currentCursorPos.x} 
            y={currentCursorPos.y} 
            isClicking={currentIsClicking}
            isVisible={currentIsCursorVisible}
          />
        )}

      </div>
    </div>
  )
}
