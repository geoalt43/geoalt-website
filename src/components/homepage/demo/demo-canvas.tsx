"use client"

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
// import { useVisibilityObserver } from '@/hooks/use-visibility-observer'
import { useDemoController } from '@/hooks/use-demo-controller'
import { useCompetitorsDemoController } from '@/hooks/use-competitors-demo-controller'
import { useModelRegionDemoController } from '@/hooks/use-model-region-demo-controller'
import { usePromptStudioDemoController } from '@/hooks/use-prompt-studio-demo-controller'
import { FakeCursor } from './fake-cursor'
import { DemoAddBrand } from './demo-add-brand'
import { DemoAddCompetitors } from './demo-add-competitors'
import { DemoSelectModelRegion } from './demo-select-model-region'
import { DemoPromptStudio } from './demo-prompt-studio'

const DEMO_MODE = true

interface DemoCanvasProps {
  activeStep: number
  tabData: {
    id: string
    title: string
    imageLight: string
    imageDark: string
    darkDropShadow?: boolean
  }
  onStepComplete?: () => void
}

export function DemoCanvas({ activeStep, tabData, onStepComplete }: DemoCanvasProps) {
  // 1. Visibility & Activation
  const containerRef = useRef<HTMLDivElement>(null)
  const competitorsContainerRef = useRef<HTMLDivElement>(null)
  const modelRegionContainerRef = useRef<HTMLDivElement>(null)
  const promptStudioContainerRef = useRef<HTMLDivElement>(null)
  // const isVisible = useVisibilityObserver(containerRef, { threshold: 0.5 })
  const isVisible = true
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

  // Helpers to get elements for Step 2 (Model & Region)
  const getModelElement = useCallback((name: string): HTMLElement | null => {
    if (!modelRegionContainerRef.current) return null
    return modelRegionContainerRef.current.querySelector(`[data-model="${name}"]`)
  }, [])

  const getRegionInputElement = useCallback((): HTMLElement | null => {
    if (!modelRegionContainerRef.current) return null
    return modelRegionContainerRef.current.querySelector('[data-region-input]')
  }, [])

  const getCountryElement = useCallback((name: string): HTMLElement | null => {
    if (!modelRegionContainerRef.current) return null
    return modelRegionContainerRef.current.querySelector(`[data-country="${name}"]`)
  }, [])

  const getDropdownElement = useCallback((): HTMLElement | null => {
    if (!modelRegionContainerRef.current) return null
    return modelRegionContainerRef.current.querySelector('[data-dropdown]')
  }, [])

  // Helper for Step 3 (Prompt Studio)
  const getTabElement = useCallback((category: string): HTMLElement | null => {
    if (!promptStudioContainerRef.current) return null
    return promptStudioContainerRef.current.querySelector(`[data-tab="${category}"]`)
  }, [])

  const getCheckElement = useCallback((index: number): HTMLElement | null => {
    if (!promptStudioContainerRef.current) return null
    return promptStudioContainerRef.current.querySelector(`[data-check-index="${index}"]`)
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

  const step2Controller = useModelRegionDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    getModelElement,
    getRegionInputElement,
    getCountryElement,
    getDropdownElement,
    onComplete: activeStep === 2 ? onStepComplete : undefined
  })

  const step3Controller = usePromptStudioDemoController({
    activeStep,
    isVisible,
    isDemoActive,
    getTabElement,
    getCheckElement,
    // Step 3 is the last step, so we loop the animation (passed undefined)
    onComplete: undefined 
  })

  // 5. Interaction Handler
  const handleUserInteraction = () => {
    if (isDemoActive) {
      setIsDemoActive(false)
    }
  }

  // Get current controller based on step
  const currentCursorPos = activeStep === 0 ? step0Controller.cursorPos : activeStep === 1 ? step1Controller.cursorPos : activeStep === 2 ? step2Controller.cursorPos : step3Controller.cursorPos
  const currentIsClicking = activeStep === 0 ? step0Controller.isClicking : activeStep === 1 ? step1Controller.isClicking : activeStep === 2 ? step2Controller.isClicking : step3Controller.isClicking
  const currentIsCursorVisible = activeStep === 0 ? step0Controller.isCursorVisible : activeStep === 1 ? step1Controller.isCursorVisible : activeStep === 2 ? step2Controller.isCursorVisible : step3Controller.isCursorVisible


  return (
    <div 
      ref={containerRef} 
      className="absolute top-[1%] left-[1%] right-[1%] bottom-0 z-10 flex items-start justify-center"
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
              isAnimating={isVisible}
            />
          </div>
        )}

        {/* STEP 2: Select AI Model & Region */}
        {activeStep === 2 && (
          <div 
            ref={modelRegionContainerRef}
            className="relative z-20 w-full h-full flex items-center justify-center overflow-visible"
          >
            <DemoSelectModelRegion 
              selectedModels={step2Controller.selectedModels}
              isDropdownOpen={step2Controller.isDropdownOpen}
              dropdownScrollTop={step2Controller.dropdownScrollTop}
              selectedRegion={step2Controller.selectedRegion}
              isRegionInputActive={step2Controller.isRegionInputActive}
              hoveredCountry={step2Controller.hoveredCountry}
              isAnimating={isVisible}
            />
          </div>
        )}

        {/* STEP 3: Prompt Studio */}
        {activeStep === 3 && (
          <div 
            ref={promptStudioContainerRef}
            className="relative z-20 w-full h-full flex items-center justify-center overflow-visible"
          >
            <DemoPromptStudio 
              activeTab={step3Controller.activeTab}
              modifyingPromptIndex={step3Controller.modifyingPromptIndex}
              modifiedPromptText={step3Controller.modifiedPromptText}
              isAnimating={isVisible}
            />
          </div>
        )}

      {/* STEP 4: Static Fallback (if added later) */}
        {activeStep >= 4 && (
          <div className={`w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[96%] h-fit max-h-full rounded-lg overflow-hidden relative shadow-2xl bg-white dark:bg-[#121212]`}>
             <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px]">
               <Image
                 src={tabData.imageDark}
                 alt={tabData.title}
                 fill
                 className={`object-contain object-top ${
                   tabData.darkDropShadow 
                     ? 'dark:drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
                     : ''
                 }`}
               />
             </div>
          </div>
        )}

        {/* Cursor Overlay - shared across steps */}
        {isDemoActive && isVisible && (activeStep <= 3) && (
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
