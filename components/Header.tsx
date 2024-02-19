'use client'

import { motion } from 'framer-motion'
import { links } from '../lib/data'
import Link from 'next/link'
function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div
        // centers the element horizontally by setting x from motion to -50% and left-1/2
        className="
     bg-white bg-opacity-80 w-full h-[4.5rem]
     fixed top-0 left-1/2 
     border-white border-opacity-40
     shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
     sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
     sm:rounded-full rounded-none 
    "
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      {/*line one - centers the element horizontally */}
      <nav
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
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="
              px-3 py-3 w-full flex items-center justify-center
              hover:text-gray-950 transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
