import React from 'react'
import { Card, Col, Image} from 'react-bootstrap'

import './Skills.css'
import designerIcon from '../../assets/images/vector.png'
import developerIcon from '../../assets/images/coding.png'

function Skills() {
  return (
    <Card className="skills">
            <Col>
                <Image src={designerIcon} height={120}/>
                <h3>
                    Graphic Designer
                </h3>
                <span>
                  <p className='abstract'>
                  I like to design minimal but efective contents 
                  and never hesitates to try new things. 
                  </p>
                </span>
                <h5>
                  What I'm Doing
                </h5>
                <p className='abstract'>
                  Icons, Logos, Portraits, Vectors 
                </p>
                <h4>
                  My Design Tools
                </h4>
                <ul className='abstract'>
                  <li>
                    Illustrator
                  </li>
                  <li>
                    Gimp
                  </li>
                  <li>
                    Photoshop
                  </li>
                </ul>
            </Col>
            <Col>
                <Image src={developerIcon} height={120}/>
                <h3>
                    Fullstack Developer
                </h3>
                <span>
                  <p className='abstract'>
                  I like to design layouts in a paper 
                  and turning it into a plane on 
                  the browser
                  </p>
                </span>
                <h5>
                  Languages
                </h5>
                <p className='abstract'>
                  CSS, HTML, Python, ReactJS, SQL
                </p>
                <h4>
                  Development Tools
                </h4>
                <ul className='abstract'>
                  <li>
                    VS Code
                  </li>
                  <li>
                    Bootstrap
                  </li>
                  <li>
                    Django
                  </li>
                  <li>
                    Flask
                  </li>
                  <li>
                    Github
                  </li>
                  <li>
                    MySQL
                  </li>
                </ul>
            </Col>
    </Card>
  )
}

export default Skills