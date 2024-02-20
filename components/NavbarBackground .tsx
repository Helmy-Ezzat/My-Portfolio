'use client'

import { motion } from 'framer-motion'

const NavbarBackground  = () => {
  return (
    <motion.div
      // This comment explains how the element is centered horizontally using 'x' and 'left'
      className="
    bg-white bg-opacity-80 w-full h-[4.5rem]
    fixed top-0 left-1/2 
    border-white border-opacity-40
    shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
    sm:rounded-full rounded-none
    dark:bg-gray-950 dark:bg-opacity-65 dark:border-black/40 
    "
      // Initial state of the animation
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      // Animation when the component is mounted
      animate={{ y: 0, x: '-50%', opacity: 1 }}
    />
  )
}

export default NavbarBackground 
