import React from 'react'
import { Card, Col} from 'react-bootstrap'
import Pulse  from 'react-reveal/Pulse'
import Bounce from 'react-reveal/Bounce'

import './Skills.css'
import PenTool from '../../assets/PenTool'
import Coding from '../../assets/Coding'

function Skills({mode}){
  return (
    <Card className="skills">
            <Col>
            <Pulse  top>
            
                <PenTool alt='designer' fill={(mode==='dark')?'#fff':'#6d3eb7'}/>
                </Pulse >
                <Bounce cascade>
                <h3>
                    Graphic <wbr/> Designer
                </h3>
                <span>
                  <p className='abstract' >
                  I design minimal but effective contents. 
                  </p>
                </span>
                <h5 >
                  What I <wbr/>Do
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
                <Coding alt='developer' loading='lazy' fill={(mode==='dark')?'#fff':'#6d3eb7'}/>
                </Pulse >
                <Bounce cascade>
                <h3>
                    Fullstack <wbr/>Developer
                </h3>
                <span>
                  <p className='abstract' >
                  I design in a paper and renders it in a browser.
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
