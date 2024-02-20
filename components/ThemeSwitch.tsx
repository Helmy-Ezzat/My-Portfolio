'use client'
import { useTheme } from '@/context/theme'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className="bg-white
    fixed bottom-[2rem] left-[2rem] w-[3rem] h-[3rem] bg-opacity-80
    border border-white border-opacity-40 shadow-2xl rounded-full
    flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeSwitch
