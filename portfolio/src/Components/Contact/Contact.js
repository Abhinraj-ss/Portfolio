import React from 'react'
import { Image} from 'react-bootstrap'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'


import './Contact.css'
import logo from '../../assets/images/logo_light.svg'
import ContactForm from './ContactForm/ContactForm'

function Contact() {

  return (
    <div className='Contact'>
      <IconContext.Provider value={{size:'1.5rem',color:'#f3f3f3' }} >
        <ContactForm/>
      <div className="footerbox">
      <Image
          loading='lazy'
          id='footerLogo'
          src={logo}
          />
          <span>Every expert was once a beginner</span>

        <div className="social">
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
        <p>
          Handcrafted by ABHIN RAJ  
        </p>
        <p>
          Made with passion
        </p>

     
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default Contact