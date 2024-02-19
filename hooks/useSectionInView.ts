import { links } from '@/lib/data'

import useActiveSectionContext from './useActiveSectionContext'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type SectionName = (typeof links)[number]['name']

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}
