import React from 'react'

import './About.css'
import Skills from '../Skills/Skills'

function About() {
  return (
    <div className='About'>
    <div className="bubble">
    <span>
        <h1>
          Hi, I'm Abhin Raj.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          , vero omnis! Dignissimos repellat labore nulla omnis ipsa 
          consequuntur atque voluptatum tempora, asperiores totam accusamus, 
          culpa iste dolores corporis debitis perspiciatis fuga deserunt. 
          
        </p>
      </span>
      <Skills/>
    </div>
      
    </div>
  )
}

export default About