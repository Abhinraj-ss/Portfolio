import React from 'react'
import { Image } from 'react-bootstrap'
import {Fade,Flip} from 'react-reveal';

import './About.css'
import Skills from '../Skills/Skills'
import profile from '../../assets/images/profile.png'

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
        I am a <b>FULLSTACK WEB DEVELOPER</b> and a <b>GRAPHIC DESIGNER</b>. Highly passionate about newer design techniques and never hesitates to try those in my works. Since I am a <b>GRAPHIC DESIGNER</b>, I used to design static logos as well as animated ones for my websites Myself.   
        </p>
        </Flip>
      </span>
      <Skills mode={mode} />
    </div>
      
    </div>
  )
}

export default About