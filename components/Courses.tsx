'use client'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Heading } from '.'
import { coursesData } from '@/lib/data'
import { useSectionInView } from '@/hooks/useSectionInView'

function Courses() {
  const { ref } = useSectionInView('Courses')
  return (
    <section id="courses" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <Heading>Courses</Heading>
      <VerticalTimeline>
        {coursesData.map((course, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af',
            }}
            date={course.date}
            icon={course.icon}
            iconStyle={{
              background: 'white',
            }}
          >
            <h3 className="font-semibold capitalize">{course.title}</h3>
            <p className="font-normal !mt-0">{course.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {course.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Courses
