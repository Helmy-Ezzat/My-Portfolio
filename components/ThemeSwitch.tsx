import React from 'react'
import { BsSun } from 'react-icons/bs'

function ThemeSwitch() {
  return (
    <button
      className="bg-white
    fixed bottom-[2rem] left-[2rem] w-[3rem] h-[3rem] bg-opacity-80
    border border-white border-opacity-40 shadow-2xl rounded-full
    flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all"
    >
      <BsSun />
    </button>
  )
}

export default ThemeSwitch