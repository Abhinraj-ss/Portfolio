import React,{useState,useEffect} from 'react'
import {Button, Col, Image, Row} from 'react-bootstrap'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'

import './Home.css'
import logo from '../../assets/images/logo_footer.png'
import menuIcon from '../../assets/images/menu.png'
import closeIcon from '../../assets/images/closeIconWyt.png'

function Home() {
    const [menuOpen, setMenuOpen]=useState(false)
    var [icon,setIcon] = useState(menuIcon)
    const handleMenuClick=()=>{
        menuOpen? setIcon(menuIcon):setIcon(closeIcon)
        setMenuOpen( !menuOpen)
    }
  return (
    <div className='Home'>
        
      <IconContext.Provider value={{size:'1.6rem',color:'#DE354C' }}>
        <div className="navbar">
            <a href='/'>
                    <Image
                    className='logo'
                    loading='lazy'
                    src={logo}
                    />
                </a>
            <ul data-visible={menuOpen}>
                    <li>
                        Home
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        About
                    </li>
            </ul>
            <div className='navToogle'>
            <Button variant='outline-primary' id='sayHello'>
                    Say Hello
                </Button>
            <Image 
                className='menuIcon' 
                src={icon} 
                loading='lazy'
                height={35} 
                width={35} 
                onClick={handleMenuClick}/>
            </div>

           
            {/* {<ul className="navbarToggle">
                    <li>
                        Home
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        About
                    </li>
                </ul>} */}
        </div>
            <div className="content">
            <div className="intro"> 
                    <p>
                        -Hello
                    </p>
                <div className="main-heading">
                    <h1>
                        I'M A FULLSTACK DEVELOPER & GRAPHIC DESIGNER.
                    </h1>
                </div>
                <Button>
                    Hire Me
                </Button>
                <div className="socialHome">
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
            </div>
            
            </div>
            </IconContext.Provider>
    </div>
  )
}

export default Home