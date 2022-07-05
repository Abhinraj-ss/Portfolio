import React from 'react'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'


import './Contact.css'
import ContactForm from './ContactForm/ContactForm'
import Logo from '../../assets/Logo'

function Contact() {

  return (
    <div className='Contact'>
      <IconContext.Provider value={{size:'1.4rem',color:'#f3f3f3' }} >
        <ContactForm/>
      <div className="footerbox">
        <Logo alt='logo'
            loading='lazy'
             fill='#fff' />
        {/* <Image
            alt='logo'
            loading='lazy'
            id='footerLogo'
            src={}
            /> */}
        <span>I am a <b>web developer</b>,<wbr/> what is your <b>superpower</b> <strong>??</strong></span>

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
        Doodled by <strong>ABHIN RAJ</strong>  
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