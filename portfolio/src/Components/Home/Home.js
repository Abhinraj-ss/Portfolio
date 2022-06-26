import React from 'react'
import {Button, Col, Image, Row} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';


import './Home.css'
import logo from '../../assets/images/logo_footer.png'

function Home() {
    const navigate = useNavigate()
  return (
    <div className='Home'>
        <div className="navbar">
            <ul>
                <Image
                src={logo}
                onClick={navigate('/')}
                />
                <li className='ms-auto'>
                    Home
                </li>
                <li>
                    Projects
                </li>
                <li>
                    About
                </li>
                <Button variant='outline-primary' id='sayHello'>
                    Say Hello
                </Button>
            </ul>
        </div>
            <Row className="content">
            <Col className="intro"> 
                    <p>
                        -Hello
                    </p>
                <div className="main-heading">
                    <h1>
                        I'M A FULLSTACK DEVELOPER & GRAPHIC DESIGNER.
                    </h1>
                </div>
            </Col>
            <Col className="portrait">
            </Col>
            </Row>
    </div>
  )
}

export default Home