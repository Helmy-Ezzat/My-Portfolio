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
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

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
