"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  size?: number
}

const ThemeToggle = ({ size = 9 }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="outline"
        className={`h-${size}`}
      >
        <MoonIcon className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={toggle}
      className={`h-${size}`}
    >
      {theme === "dark" ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </Button>
  )
}

export default ThemeToggle
