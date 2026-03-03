"use client"

import { Moon, Sun, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * ModeToggle component allows users to switch between Light, Dark, and System themes.
 * It uses a DropdownMenu to present options and indicates the current selection.
 */
export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Sun icon for Light mode (visible when not dark) */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon for Dark mode (visible when dark) */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Light Mode Option */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
          {/* Show checkmark if current theme is light */}
          {theme === "light" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>

        {/* Dark Mode Option */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
          {/* Show checkmark if current theme is dark */}
          {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>

        {/* System Mode Option */}
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
          {/* Show checkmark if current theme is system */}
          {theme === "system" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
