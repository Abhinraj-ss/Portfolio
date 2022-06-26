import React from 'react'
import {Card, Image} from 'react-bootstrap'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram,FaRegCopyright} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'

import './Contact.css'
import logo from '../../assets/images/logo_footer.png'
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
        <p>
          Handcrafted by ABHIN RAJ &nbsp;  
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