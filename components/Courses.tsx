'use client'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Heading } from '.'
import { coursesData } from '@/lib/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useTheme } from '@/context/theme'

function Courses() {
  const { theme } = useTheme()
  const { ref } = useSectionInView('Courses')
  return (
    <section id="courses" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <Heading>Courses</Heading>
      <VerticalTimeline lineColor="">
        {coursesData.map((course, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background:
                theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight:
                theme === 'light'
                  ? '0.4rem solid #9ca3af'
                  : '0.4rem solid rgba(255, 255, 255, 0.5)',
            }}
            date={course.date}
            icon={course.icon}
            iconStyle={{
              background:
                theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
              fontSize: '1.5rem',
            }}
          >
            <h3 className="font-semibold capitalize">{course.title}</h3>
            <p className="font-normal !mt-0">{course.location}</p>
            <p className="!mt-1 !font-normal text-gray-700  dark:text-white/75">
              {course.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Courses
