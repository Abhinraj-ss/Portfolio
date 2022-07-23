import React from 'react'
import { Button, Image } from 'react-bootstrap'
import {Fade,Flip} from 'react-reveal';
import {FiDownload} from 'react-icons/fi'


import './About.css'
import Skills from '../Skills/Skills'
import profile from '../../assets/images/profile.png'
import resume from '../../assets/resume/download.pdf'

function About({mode}) {
  return (
    <div className='About'>
    <div className="about-content"  >
    <span>
        <Image alt='profile' className='profileImg' src={profile}/>
        <Fade top>
        <h1 >
          Hi, I'm Abhin Raj.
        </h1 >
        </Fade>
        <Flip top>
        <p >
        A <b>FULLSTACK WEB DEVELOPER</b> and  <b>GRAPHIC DESIGNER</b>. Ardently passionate on modern design techniques who never hesitates to try it out  in my works.As a <b>GRAPHIC DESIGNER</b>, I design static and animated logos  for my websites and Myself.<br/>        
        <a href={resume} download={"AbhinRaj-Dev"}>
          <Button className='mt-4 Btn-sec-Accent'>
            <FiDownload color='#f3f3f3' size='1.1rem'/> Resume
          </Button>
        </a>
        </p>
        </Flip>
      </span>
      <Skills mode={mode} />
    </div>
      
    </div>
  )
}

export default About