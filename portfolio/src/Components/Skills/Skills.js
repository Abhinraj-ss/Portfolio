import React from 'react'
import { Card, Col, Image} from 'react-bootstrap'
import Pulse  from 'react-reveal/Pulse'
import Bounce from 'react-reveal/Bounce'

import './Skills.css'
import designerDarkIcon from '../../assets/images/vector_dark.svg'
import developerDarkIcon from '../../assets/images/coding_dark.svg'
import designerLightIcon from '../../assets/images/vector_light.svg'
import developerLightIcon from '../../assets/images/coding_light.svg'

function Skills({mode}){
  return (
    <Card className="skills">
            <Col>
            <Pulse  top>
            <Image alt='designer' loading='lazy' src={(mode==='light')?designerDarkIcon:designerLightIcon} height={120} />
                </Pulse >
                <Bounce cascade>
                <h3>
                    Graphic <wbr/> Designer
                </h3>
                <span>
                  <p className='abstract' >
                  I like to design minimal but effective contents. 
                  </p>
                </span>
                <h5 >
                  What I'm <wbr/>Doing
                </h5>
                <p className='abstract' >
                  Icons, Logos, Portraits, Vectors 
                </p>
                <h4>
                  Design <wbr/>Tools
                </h4>
                <ul className='abstract'>
                  <li>
                    Illustrator
                  </li>
                  <li>
                    After Effects
                  </li>
                  <li>
                    Gimp
                  </li>
                  <li>
                    Photoshop
                  </li>
                </ul>
                </Bounce>
            </Col>
            <Col>
            <Pulse  top>
            <Image alt='developer' loading='lazy' src={(mode==='light')?developerDarkIcon:developerLightIcon} height={120} />
                </Pulse >
                <Bounce cascade>
                <h3>
                    Fullstack <wbr/>Developer
                </h3>
                <span>
                  <p className='abstract' >
                  I like to design layouts in a paper 
                  and turning it into a plane on 
                  the browser
                  </p>
                </span>
                <h5 >
                  Languages
                </h5>
                <p className='abstract' >
                  CSS, HTML, Python, ReactJS, SQL
                </p>
                <h4>
                  Dev <wbr/>Tools
                </h4>
                <ul className='abstract' >
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
                </Bounce>
            </Col>
    </Card>
  )
}

export default Skills