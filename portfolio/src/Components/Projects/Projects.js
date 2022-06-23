import React from 'react'

import './Projects.css'
import ProjectCard from './Card/ProjectCard'

function Projects() {
  return (
    <div className='Projects'>
      <div className="d-block heading">
          Selected Works
      </div>
      <div className="cards">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects