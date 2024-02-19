'use client'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'
import React from 'react'
import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
function WhatsApp() {
  const { activeSection } = useActiveSectionContext()
  return (
    <>
      {activeSection === 'Contact' && (
        <WhatsAppWidget companyName="Helmy Ezzat" phoneNumber="01011839745" />
      )}
    </>
  )
}

export default WhatsApp
