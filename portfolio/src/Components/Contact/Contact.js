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
      <IconContext.Provider value={{size:'1.4rem',color:'#f3f3f3' }} >
        <ContactForm/>
      <div className="footerbox">
      <Image
          alt='logo'
          loading='lazy'
          id='footerLogo'
          src={logo}
          />
          <span>I am a web developer,<wbr/> what is your superpower ??</span>

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
        Doodled by ABHIN RAJ  
        </p>
        {/* <p>
          Made with passion
        </p> */}

     
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default Contact