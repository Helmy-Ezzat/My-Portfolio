import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import realEstate from '@/public/real-estate.png'

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
  proficiency?: string
}
export const coursesData: Course[] = [
  {
    title: 'Programming fundamentals diploma',
    location: 'Cairo,  Route IT Training Center',
    description: 'Introduction level:',
    detailsDiploma: [
      {
        name: 'C++',
        proficiency:
          'Data types - Operators - If Statement & Switch Case - Loops - 1D/2D Arrays - Functions',
      },
      {
        name: 'OOP',
        proficiency:
          'Classes - Objects - Class diagram - Encapsulation - Inheritance - Composition - Function Overloading & Function Overriding - Static Members & Static Methods - Abstraction - Templates - Polymorphism - Pointers - Exceptionhandling',
      },
      {
        name: 'Data Structures and Algorithms',
        proficiency: 'Stack - Queue',
      },
      {
        name: 'SOLID Principles & Design Patterns',
        proficiency: 'Introduction',
      },
      {
        name: 'Database',
        proficiency: 'Introduction',
      },
    ],
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
  {
    title: 'Front-End Developer Bootcamp',
    location: 'Cairo, Route IT Training Center',
    description: '',
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
    title: 'Market-Estate',
    description:
      '"Market-Estate" is a full-stack web application developed using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. It is designed to provide a platform for real estate management, allowing users to browse, search, and list properties.',
    tags: ['React', 'Tailwind', 'MongoDB', 'Express'],
    imageUrl: realEstate,
    githubRepo: 'https://github.com/Helmy-Ezzat/market-estate',
    demo: 'https://market-estate.onrender.com/',
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
  'Framer Motion',
  'Formik',
  'Yup',
  'MongoDB',
] as const
