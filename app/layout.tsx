import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  BackgroundDecorations,
  Footer,
  Header,
  ThemeSwitch,
} from '@/components'
import ActiveSectionContextProvider from '@/context/activeSection'
import ThemeContextProvider from '@/context/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Helmy | Personal Portfolio',
  description: 'Helmy is a front-end developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} pt-28 sm:pt-36 bg-gray-50 text-gray-950 relative`}
      >
        <BackgroundDecorations />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
