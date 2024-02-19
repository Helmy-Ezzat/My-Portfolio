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
}

export const ActiveSlice =
  createContext<activeType | null>(null)

function ActiveSectionContextProvider({
  children,
}: propsType) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  return (
    <ActiveSlice.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSlice.Provider>
  )
}

export default ActiveSectionContextProvider

