import React,{useMemo, useState} from 'react'
import {Button, Image} from 'react-bootstrap'

import './ProjectCard.css'
import ImageModal from './ImageModal'

function ProjectCard( projectData) {
  const [show, setShow] = useState(false)
  // console.log(projectData.projectData)
  const data = useMemo(()=>{return(projectData.projectData)},[projectData])
  // console.log(data.image)
  var style = data.color?{background: `${data.color}`}:{backgroundImage: `url(${data.image})`,width:'100%',height:'100%',backgroundSize: 'cover',backgroundRepeat :'no-repeat'}
  const handleClose = () =>{
    setShow(!show)
  }
  // console.log(show)
  return (
    <>
    <ImageModal link={data.linkHQ} show={show} handleClose={handleClose}/>
    <div className="projectCard" style={style} >
      {
        data.color&& 
        <div className="bg">
          <Image loading='lazy' src={data.image}
          width={90}/>
          <h2>
          {data.title}
          </h2>
        </div>
      }
        <div className="card-body">
          {data.color&&
           <p>
           {data.title}
         </p>
          }
           
            <span>
              <p>
                {data.content}
              </p>
            </span>
              {data.color ?
                <Button href={data.link}>
                  Visit Site
                </Button>:
                <Button onClick={()=>setShow(true)}>
                  Preview
                </Button>
              }
        </div>
    </div>
    </>
    
    
  )
}

export default ProjectCard