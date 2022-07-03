import React from 'react'
import { Image } from 'react-bootstrap'
import {Fade,Flip} from 'react-reveal';

import './About.css'
import Skills from '../Skills/Skills'
import profile from '../../assets/images/profile.png'

function About() {
  return (
    <div className='About'>
    <div className="about-content"  >
    <span>
        <Image className='profileImg' src={profile}/>
        <Fade top>
        <h1 >
          Hi, I'm Abhin Raj.
        </h1 >
        </Fade>
        <Flip top>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          , vero omnis! Dignissimos repellat labore nulla omnis ipsa 
          consequuntur atque voluptatum tempora, asperiores totam accusamus, 
          culpa iste dolores corporis debitis perspiciatis fuga deserunt. 
          
        </p>
        </Flip>
      </span>
      <Skills />
    </div>
      
    </div>
  )
}

export default About