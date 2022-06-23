import React from 'react'
import {Button, Col, Image, Row} from 'react-bootstrap'


import './Home.css'
import logo from '../../assets/images/logo_tag.png'

function Home() {
  return (
    <div className='Home'>
        <div className="navbar">
            <ul>
                <Image
                src={logo}
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
                im col-2
            </Col>
            </Row>
    </div>
  )
}

export default Home