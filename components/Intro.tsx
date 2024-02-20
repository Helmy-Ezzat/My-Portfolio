'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import imageProfile from '@/public/helmy.png'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/hooks/useSectionInView'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'

function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center mb-28 scroll-mt-[100rem] sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              className="h-24 w-24 object-cover rounded-full"
              src={imageProfile}
              alt="Helmy Ezzat"
              width={'192'}
              height={'192'}
              quality={'95'}
              priority={true}
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="
      text-2xl sm:text-4xl
      mb-10 mt-4 px-4 font-semibold !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        Hello,<span className="font-bold"> I'm Helmy. </span> <br />
        I'm a{' '}
        <span className="font-bold">
          front-end developer. <br />
        </span>
        <span className="italic">
          I'm excited about building websites and web applications, and I enjoy
          working with technologies <br /> like{' '}
        </span>
        <span className="underline font-bold">React.js</span> and{' '}
        <span className="underline font-bold">Next.js.</span>❤️
        <br />
      </motion.h1>

      <motion.div
        className="
        flex flex-col sm:flex-row
        items-center justify-center gap-2 px-2 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={'#contact'}
          className="group
        flex items-center gap-2 bg-gray-900 text-white
        px-7 py-3 rounded-full outline-none
        focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 opacity-70 transition" />
        </Link>
        <a
          href="/CV.pdf"
          target="_blank"
          className="group
        flex items-center gap-2 bg-white
        px-7 py-3 rounded-full outline-none
        focus:scale-110 hover:scale-110 active:scale-105 transition
        cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV{' '}
          <HiDownload className="group-hover:translate-y-1 opacity-60 transition" />
        </a>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/helmy-ezzat-72a097245/"
            target="_blank"
            className="
        bg-white p-4 text-gray-700 rounded-full
        focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition
        cursor-pointer borderBlack
        dark:bg-white/10 dark:text-white/70"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Helmy-Ezzat"
            target="_blank"
            className="
        bg-white p-4 text-gray-700 rounded-full text-[1.35rem]
        focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition
        cursor-pointer borderBlack
        dark:bg-white/10 dark:text-white/70"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro
