import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaGithubSquare, FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import realEstate from '@/public/real-estate.png'
import productdetails from '@/public/productdetails.png'
import X from '@/public/x.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Courses',
    hash: '#courses',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

interface Course {
  title: string
  location: string
  description?: string
  detailsDiploma?: { name: string; proficiency: string }[]
  icon: React.FunctionComponentElement<any>
  date: string
  name?: string
  proficiency?: string | HTMLAnchorElement
}
export const coursesData: Course[] = [
  {
    title: 'Programming fundamentals diploma',
    location: 'Cairo,  Route IT Training Center',
    description: 'Core Topics Covered:',
    detailsDiploma: [
      {
        name: 'C++',
        proficiency:
          'Data types, Operators, Control Structures, Arrays, Functions',
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        proficiency:
          'Classes, Inheritance, Polymorphism, Encapsulation, Abstraction',
      },
      {
        name: 'Data Structures and Algorithms',
        proficiency: 'Stack, Queue',
      },
      {
        name: 'SOLID Principles & Design Patterns',
        proficiency: 'Basic Concepts',
      },
      {
        name: 'Database',
        proficiency: 'Fundamentals',
      },
      {
        name: 'Final Project',
        proficiency: (
          <a
            className=" flex items-center gap-2 mt-1"
            href="https://github.com/Helmy-Ezzat/Bank-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-2xl" />
            <span className="text-blue-500">Bank System</span>
          </a>
        ),
      },
    ],
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
  {
    title: 'Front-End Developer Bootcamp',
    location: 'Cairo, Route IT Training Center',
    description: 'Core Topics Covered:',
    detailsDiploma: [
      {
        name: 'Front-end content',
        proficiency:
          'HTML - CSS - CSS GRID - CSS FLEX - JavaScript - AsynchronousProgramming - AJAX - TypeScript - Bootstrap5 - JQuery - NPM - Figma - JSON - SASS',
      },
      {
        name: 'React Content',
        proficiency:
          'SPA Archticture - React Archticture - Class & Functional components - JSX - tailwindcss - State & Props - Axios - Components Life Cycle - Virtual DOM - React Hooks - Custom Hooks - Routing - Context API - Formik & YUP - Material UI - Online Payment Integration - React-Query - JWT Authentication TypeScript with React - Deployment',
      },
    ],
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
] as const

export const projectsData = [
  {
    title: 'Fresh-Cart',
    description: 'An e-commerce application utilizing React.',
    tags: ['React', 'Bootstrap', 'React-Query', 'Axios', 'Formik', 'Yup'],
    imageUrl: productdetails,
    githubRepo: 'https://github.com/Helmy-Ezzat/Fresh-Cart',
    demo: 'https://fresh-cart-sage-psi.vercel.app/login',
  },

  {
    title: 'Market-Estate',
    description:
      '"Market-Estate" is a MERN stack web app for real estate management, enabling users to browse, search, and list properties.',
    tags: ['React', 'Tailwind', 'MongoDB', 'Express'],
    imageUrl: realEstate,
    githubRepo: 'https://github.com/Helmy-Ezzat/market-estate',
    demo: 'https://market-estate.onrender.com/',
  },
  {
    title: 'X-Clone',
    description:
      '"x-clone" is a cutting-edge web application designed for seamless account creation and login experiences.',
    tags: ['React', 'Tailwind', 'MongoDB', 'Express'],
    imageUrl: X,
    githubRepo: 'https://github.com/Helmy-Ezzat/X-clone',
    demo: 'https://x-clone-vvnc.onrender.com/',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'GitHub',
  'Tailwind',
  'Bootstrap5',
  'MUI',
  'chakra ui',
  'Redux',
  'Redux Toolkit',
  'React Query',
  'Framer Motion',
  'Formik',
  'Yup',
  'MongoDB',
  'Express',
] as const
