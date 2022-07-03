import React,{useMemo} from 'react'
import {Button} from 'react-bootstrap'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'
import Jello from 'react-reveal/Jello'

import './Home.css'
import ParticlesBg from '../../assets/ParticlesBg'

function Home({mode,offsetTopContact}) {
    const gotoSection = () =>{
        window.scrollTo({
          top:offsetTopContact.offsetTop,
          behavior:"smooth"
        })
      }
      
    const backgroundColor=useMemo(()=>{
        if(mode==='dark')
            return('#0a192f')
        else
            return('#f3f3f3')
    },[mode])
  return (
    <div className='Home' >
            <ParticlesBg id="particles" bgColor={backgroundColor} zIndex={-1}/>
            
      <IconContext.Provider value={{size:'1.6rem',color:'#DE354C' }}>
            <div className="content">
            <div className="intro">
                    <p>
                        -Hello
                    </p>
                <div className="main-heading">

                    <h1>
                        I'M A FULLSTACK DEVELOPER & A GRAPHIC DESIGNER.
                    </h1>
                </div>
                  <Button onClick={gotoSection}>
                      Hire Me
                  </Button>
                <Jello>
                <div className="socialHome">
                    <a rel="noreferrer" href='https://github.com/Abhinraj-ss' target='_blank'>
                    <FaGithub/>
                    </a>
                    <a rel="noreferrer" href='https://www.linkedin.com/in/abhinrajss' target='_blank'>

                    <FaLinkedin/>
                    </a>
                    <a rel="noreferrer" href='mailto:abhin.raj.s.s23@gmail.com' target='_blank'>
                    <FaEnvelope/>
                    </a>
                    <a rel="noreferrer" href='https://www.instagram.com/varayan._kuthira' target='_blank'>
                    <FaInstagram/>
                    </a>
                    
      </div>
      </Jello>
            </div>
            
            </div>
            </IconContext.Provider>
            
    </div>
  )
}

export default Home