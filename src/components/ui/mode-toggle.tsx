"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9 border-0 bg-[var(--color-page-background)] hover:bg-surface-hover">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 border-0 bg-[var(--color-page-background)] hover:bg-surface-hover cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-text-primary transition-transform" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-black transition-transform" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
