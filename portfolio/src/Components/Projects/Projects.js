import React from 'react'
import Roll from 'react-reveal'

import './Projects.css'
import ProjectCard from './Cards/ProjectCard'
import { Button } from 'react-bootstrap'
import { webProjects } from './webProjects'
import {graphicProjects} from './graphicProjects'

function Projects() {
  return (
    <div className='Projects'>
      <div className="caption Web">
          <p>Web Development Projects</p>
          <span>
            <p>
            Here are some fullstack web projects on which I have been working on recently. Check it out.  
            </p>
          </span>
        </div> 
        
          <div className="web cards">
            {
              webProjects.map(
                (projectData,index)=>{
                  return(
                    <Roll left key={index}>
                  <ProjectCard  projectData={projectData}/>
                  </Roll>)
                }
              )
            }
          </div>
        <div className="caption Graphic">
          <p>Graphic Design Projects</p>
          <span>
            <p>
            Here are some graphic design projects, I have been working on recently. Check it out.            </p>
          </span>
        </div> 
        <div className="graphic cards">
          {
            graphicProjects.map(
              (projectData,index)=>{
                return(
                  <Roll right key={index}>
                <ProjectCard  projectData={projectData}/>
                </Roll>
                )
              }
            )
          }
        </div>
        <Button className='btnSee' href='https://www.instagram.com/varayan._kuthira' target="_blank" rel="noopener noreferrer">
          See More
        </Button>
    </div>
  )
}

export default Projects