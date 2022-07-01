import React, { useRef } from 'react'
import { Image } from 'react-bootstrap'

import './About.css'
import Skills from '../Skills/Skills'
import useElementOnScroll from '../../assets/useElementOnScroll'
import profile from '../../assets/images/profile.png'

function About() {
  const aboutContentRef = useRef(null)
  const isVisible = useElementOnScroll(aboutContentRef)
  return (
    <div className='About'>
    <div className="about-content" data-visible={isVisible}>
    <span>
        <Image className='profileImg' src={profile}/>
        <h1 ref={aboutContentRef} data-visible={isVisible} >
          Hi, I'm Abhin Raj.
        </h1 >
        <p ref={aboutContentRef} data-visible={isVisible}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          , vero omnis! Dignissimos repellat labore nulla omnis ipsa 
          consequuntur atque voluptatum tempora, asperiores totam accusamus, 
          culpa iste dolores corporis debitis perspiciatis fuga deserunt. 
          
        </p>
      </span>
      <Skills />
    </div>
      
    </div>
  )
}

export default About