import React from 'react'
import {Button} from 'react-bootstrap'

import './ProjectCard.css'
function ProjectCard( {logo}) {
  return (
    <div className="projectCard" style={{background: `url(${logo})`,backgroundSize:'cover'}} >

        {/* <img loading='lazy' id='cardImg' src= {logo}/> */}
        <div className="card-body">
            <p>
              Title..
            </p>
            <span>
              <p>
              this is a project card.Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntu
              </p>
            </span>
            <Button>
              Visit
            </Button>
        </div>
    </div>
    
  )
}

export default ProjectCard