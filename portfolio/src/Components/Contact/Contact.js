import React from 'react'
import {Image} from 'react-bootstrap'

import './Contact.css'
import logo from '../../assets/images/logo_footer.png'

function Contact() {
  return (
    <div className='Contact'>
      Contact
      <div className="footerbox">
      <Image
          id='footerLogo'
          src={logo}
          />
        <div className="social">

        </div>
        <p>
          Handcrafted by me 2022
        </p>
        <p>
          Made with passion
        </p>
      </div>
    </div>
  )
}

export default Contact