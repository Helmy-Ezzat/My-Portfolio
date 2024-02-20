'use client'

import React, { useRef, useState } from 'react'
import { projectsData } from '../lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FaCode } from 'react-icons/fa6'
import { GoEye } from 'react-icons/go'

type ProjectProps = (typeof projectsData)[number]
function Project({
  title,
  description,
  tags,
  imageUrl,
  githubRepo,
  demo,
}: ProjectProps) {
  const [showButtons, setShowButtons] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb:8 last:mb-0"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section
        className="
      relative max-w-[42rem] bg-gray-100
      border border-black/5 rounded-lg overflow-hidden
      sm:pr-8 sm:h-[20rem] sm:group-even:pl-8
      hover:bg-gray-200 transition
      dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <div
          className="
        pt-7 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-0
        sm:max-w-[50%] flex flex-col h-full
        sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold dark:text-white/90">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 sm:mt-auto group-hover:opacity-0">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] text-white text-[0.7rem] px-3 py-1 rounded-full uppercase tracking-wider dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block
          absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
       
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          
          group-even:right-[initial] group-even:-left-40
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
       
          transition
          "
        />

        {showButtons && (
          <motion.div
            className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-6 "
            initial={{ opacity: 0, x: '-50%', scale: 0.8, y: 100 }}
            animate={{ opacity: 1, x: '-50%', scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              className="
              bg-black text-white rounded-full
              focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
              "
              href={githubRepo}
              target="_blank"
            >
              <FaCode className="w-[3rem] h-[3rem] text-2xl p-3" />
            </a>
            <a
              className="
              bg-white text-black rounded-full
              focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/80"
              href={demo}
              target="_blank"
            >
              <GoEye className="w-[3rem] h-[3rem] text-2xl p-3 " />
            </a>
          </motion.div>
        )}
      </section>
    </motion.div>
  )
}

export default Project
