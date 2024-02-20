'use client'
import { links } from '../lib/data'
import React, { createContext, useState } from 'react'

type propsType = {
  children: React.ReactNode
}
type SectionName = (typeof links)[number]['name']
type activeType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSlice = createContext<activeType | null>(null)

function ActiveSectionContextProvider({ children }: propsType) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSlice.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSlice.Provider>
  )
}

export default ActiveSectionContextProvider
