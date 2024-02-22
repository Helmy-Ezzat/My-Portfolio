'use client'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'
import React from 'react'
import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
function WhatsApp() {
  const { activeSection } = useActiveSectionContext()
  return (
    <WhatsAppWidget companyName="Helmy Ezzat" phoneNumber="+201011839745" />
  )
}

export default WhatsApp
