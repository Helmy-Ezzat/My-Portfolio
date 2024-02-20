import { ActiveSlice } from '@/context/activeSection'
import { useContext } from 'react'

const useActiveSectionContext = () => {
  const context = useContext(ActiveSlice)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }
  return context
}

export default useActiveSectionContext
