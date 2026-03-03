"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * ThemeProvider component that wraps the application with next-themes provider.
 * This enables theme switching (light/dark/system) and persists the preference.
 *
 * @param children - The child components to be wrapped.
 * @param props - Additional props passed to the NextThemesProvider.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
