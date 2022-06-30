import React from 'react'

import './Projects.css'
import ProjectCard from './Cards/ProjectCard'
import { Button } from 'react-bootstrap'
import { webProjects } from './webProjects'
import {graphicProjects} from './graphicProjects'

function Projects() {
  // console.log(webProjects)
  // console.log(graphicProjects)
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
                  return(<ProjectCard key={index} projectData={projectData}/>)
                }
              )
            }
            {/* <ProjectCard logo={webLogo}/>
            <ProjectCard logo={webLogo}/>
            <ProjectCard logo={webLogo}/>  */}
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
                return(<ProjectCard key={index} projectData={projectData}/>)
              }
            )
          }

          {/* <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/> */}
          
        </div>
        <Button className='btnSee'>
          See More
        </Button>
    </div>
  )
}

export default Projects