import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div
          className="
        bg-[#fbe2e3] w-[31.25rem] h-[31.25rem] rounded-full
          absolute top-[-6rem] right-[11rem] -z-10
          sm:w-[68.75rem]
          blur-[11rem]"
        />
        <div
          className="
        bg-[#dbd7fb] w-[50rem] h-[31.25rem] rounded-full
          absolute top-[-1rem] left-[-35rem] -z-10
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
          blur-[11rem]"
        />
        {children}
      </body>
    </html>
  )
}
