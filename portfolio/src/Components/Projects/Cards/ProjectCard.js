import React,{ useState} from 'react'
import {Button, Image} from 'react-bootstrap'

import './ProjectCard.css'
import ImageModal from './ImageModal'

function ProjectCard( {projectData}) {
  const [show, setShow] = useState(false)
  var style = projectData.color?{background: `${projectData.color}`}:{backgroundImage: `url(${projectData.image})`,width:'100%',height:'100%',backgroundSize: 'cover',backgroundRepeat :'no-repeat'}
  const handleClose = () =>{
    setShow(!show)
  }
  return (
    <>
    <ImageModal link={projectData.linkHQ} show={show} handleClose={handleClose}/>
    <div className="projectCard" style={style} >
      {
        projectData.color&& 
        <div className="bg">
          <Image loading='lazy' src={projectData.image}
          width={90}/>
          <h2>
          {projectData.title}
          </h2>
        </div>
      }
        <div className="card-body">
          {projectData.color&&
           <p>
           {projectData.title}
         </p>
          }
            
            <span>
              <p>
                {projectData.keywords}<br/>
                {projectData.content}
              </p>
            </span>
              {projectData.color ?
                <Button target='_blank' href={projectData.link}>
                  Visit Site
                </Button>:
                <Button  onClick={()=>setShow(true)}>
                  Preview
                </Button>
              }
        </div>
    </div>
    </>
    
    
  )
}

export default ProjectCard