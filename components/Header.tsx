'use client'

import { motion } from 'framer-motion'
import { links } from '../lib/data'
import Link from 'next/link'
import { NavbarBackground } from '.'
import clsx from 'clsx'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'
function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <header className="relative z-[999]">
      <NavbarBackground />
      <nav
        // line one - centers the element horizontally
        className="flex
       h-12 fixed left-1/2 -translate-x-1/2 top-[0.5rem] py-2
       sm:h-[initial] sm:top-[1.7rem] sm:py-0
      "
      >
        <ul
          className="
        w-[22rem] flex flex-wrap gap-y-1 justify-center items-center
        text-[0.9rem] font-medium text-gray-500
        sm:w-[initial] sm:gap-5 sm:flex-nowrap"
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'px-3 py-3 w-full flex items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-gray-200':
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-400 dark:bg-opacity-20"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
