import {React,useRef} from 'react'
import { Card, Col, Image} from 'react-bootstrap'

import './Skills.css'
import designerDarkIcon from '../../assets/images/vector_dark.png'
import developerDarkIcon from '../../assets/images/coding_dark.png'
import designerLightIcon from '../../assets/images/vector_light.png'
import developerLightIcon from '../../assets/images/coding_light.png'
import useElementOnScroll from '../../assets/useElementOnScroll'

function Skills(){
  const skillsImgRef1 = useRef(null)
  const skillsImgRef2 = useRef(null)
  const isImgVisible1 = useElementOnScroll(skillsImgRef1)
  const isImgVisible2 = useElementOnScroll(skillsImgRef2)
  const mode = localStorage.getItem("mode")
  return (
    <Card className="skills">
            <Col>
                <Image src={(mode==='light')?developerDarkIcon:developerLightIcon} height={120} ref={skillsImgRef1} data-visible={isImgVisible1}/>
                <h3 >
                    Graphic Designer
                </h3>
                <span>
                  <p className='abstract' >
                  I like to design minimal but effective contents 
                  and never hesitates to try new things. 
                  </p>
                </span>
                <h5 >
                  What I'm Doing
                </h5>
                <p className='abstract' >
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
                <Image src={(mode==='light')?designerDarkIcon:designerLightIcon} height={120} ref={skillsImgRef2}  data-visible={isImgVisible2}/>
                <h3>
                    Fullstack Developer
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
                  Development Tools
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
            </Col>
    </Card>
  )
}

export default Skills