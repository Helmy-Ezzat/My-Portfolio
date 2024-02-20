'use client'

import { motion } from 'framer-motion'
function Divider() {
  return (
    <motion.div
      className="
      bg-gray-200 h-16 w-1 rounded-full hidden sm:block my-24 dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  )
}

export default Divider
