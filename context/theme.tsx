'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'


type Theme = 'light' | 'dark'
type ThemeProps = {
  children: React.ReactNode
}
type ThemeType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeSlice = createContext<ThemeType | null>(null)

function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {}
  useEffect(() => {}, [])

  return (
    <ThemeSlice.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSlice.Provider>
  )
}

export default ThemeContextProvider

export const useTheme = () => {
  const context = useContext(ThemeSlice)

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }

  return context
}
