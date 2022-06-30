import React,{useMemo} from 'react'
import {Button, Image} from 'react-bootstrap'

import './ProjectCard.css'
import logo from '../../../assets/images/web.png'

function ProjectCard( projectData) {
  console.log(projectData.projectData)
  const data = useMemo(()=>{return(projectData.projectData)})
  console.log(data.image,logo)
  var style = data.color?{background: `${data.color}`}:{backgroundImage: `url(${data.image})`,backgroundSize:'cover',backgroundRepeat :'no-repeat'}

  return (
    <div className="projectCard" style={style} >
      {
        data.color&& 
        <div className="bg">
          <Image src={data.image}
          width={100}/>
          <h2>
          {data.title}
          </h2>
        </div>
      }
        <div className="card-body">
            <p>
              {data.title}
            </p>
            <span>
              <p>
                {data.content}
              </p>
            </span>
            <Button href={data.link}>
              Visit
            </Button>
        </div>
    </div>
    
  )
}

export default ProjectCard