import React from 'react'
import { Carousel } from 'react-bootstrap'

import './Projects.css'
import ProjectCard from './Cards/ProjectCard'
import graphicLogo from '../../assets/images/graphic.png'
import webLogo from '../../assets/images/web.png'

function Projects() {
  return (
    <div className='Projects'>
      <div className="caption Web">
          <p>Web Development Projects</p>
          <span>
            <p>
              this is a demo caption.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            </p>
          </span>
        </div>  
        <Carousel variant='light' indicators={false} pause='hover' >
          <Carousel.Item>
          <div className="web cards">
          <ProjectCard logo={webLogo}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="web cards">
          <ProjectCard logo={webLogo}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="web cards">
          <ProjectCard logo={webLogo}/>
          </div>
          </Carousel.Item>
        </Carousel> 
        <div className="caption Graphic">
          <p>Graphical Design Projects</p>
          <span>
            <p>
              this is a demo caption.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            </p>
          </span>
        </div> 
        <Carousel variant='light' indicators={false} pause='hover'>
          <Carousel.Item>
          <div className="graphic cards">
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="graphic cards">
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="graphic cards">
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          <ProjectCard logo={graphicLogo}/>
          </div>
          </Carousel.Item>
        </Carousel> 
         
    </div>
  )
}

export default Projects