import React from 'react'
import {Button} from 'react-bootstrap'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'

import './Home.css'

function Home() {
    
      
  return (
    <div className='Home' >
      <IconContext.Provider value={{size:'1.6rem',color:'#DE354C' }}>
            <div className="content">
            <div className="intro"> 
                    <p>
                        -Hello
                    </p>
                <div className="main-heading">
                    <h1>
                        I'M A FULLSTACK DEVELOPER & GRAPHIC DESIGNER.
                    </h1>
                </div>
                <Button>
                    Hire Me
                </Button>
                <div className="socialHome">
                    <a href='https://github.com/Abhinraj-ss'>
                    <FaGithub/>
                    </a>
                    <a href='https://www.linkedin.com/in/abhinrajss'>

                    <FaLinkedin/>
                    </a>
                    <a href='mailto:abhin.raj.s.s23@gmail.com'>
                    <FaEnvelope/>
                    </a>
                    <a href='https://www.instagram.com/varayan._kuthira'>
                    <FaInstagram/>
                    </a>
      </div>
            </div>
            
            </div>
            </IconContext.Provider>
    </div>
  )
}

export default Home