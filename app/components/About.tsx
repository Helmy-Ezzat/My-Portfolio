'use client'

import { motion } from 'framer-motion'
import { Heading } from '.'

function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">History</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp with{' '}
        <a
          className="text-blue-600 hover:underline"
          target="_blank"
          href="https://www.linkedin.com/company/routeacademy/?originalSubdomain=eg"
        >
          Route Academy{' '}
        </a>
        and learned{' '}
        <span className="font-medium">front-end web development</span>. My core
        stack is <span className="font-medium">React and Next.js. </span>I am
        also familiar with TypeScript and Prisma. I am always looking to learn
        new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>
    </motion.section>
  )
}

export default About
