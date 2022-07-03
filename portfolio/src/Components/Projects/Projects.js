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
              this is a demo caption.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </p>
          </span>
        </div> 
        
          <div className="web cards">
            {
              webProjects.map(
                (projectData,index)=>{
                  return(
                    <Roll left>
                  <ProjectCard key={index} projectData={projectData}/>
                  </Roll>)
                }
              )
            }
          </div>
        <div className="caption Graphic">
          <p>Graphic Designing Projects</p>
          <span>
            <p>
              this is a demo caption.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            </p>
          </span>
        </div> 
        <div className="graphic cards">
          {
            graphicProjects.map(
              (projectData,index)=>{
                return(
                  <Roll right >
                <ProjectCard key={index} projectData={projectData}/>
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