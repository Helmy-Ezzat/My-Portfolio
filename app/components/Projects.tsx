import React from 'react'
import { Heading } from '.'
import { projectsData } from '../lib/data'
import Project from './Project'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <Heading>my projects</Heading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
