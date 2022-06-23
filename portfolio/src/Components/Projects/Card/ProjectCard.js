import React from 'react'
import {Card} from 'react-bootstrap'

import './ProjectCard.css'
import logo from '../../../assets/images/logo_tag.png'
function ProjectCard() {
  return (
    <Card>
        <Card.Img variant='top'id='cardImg' src= {logo}/>
        <hr/>
        <Card.Body>
            <Card.Text>
                this is a project card.
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProjectCard