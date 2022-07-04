import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef,useState,useMemo, useEffect } from 'react';
import { Button,Image} from 'react-bootstrap';
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import Lottie from "lottie-react";
import logoAnimate from './assets/images/ar-logo-ae.json';


import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import logoLight from './assets/images/logo_light.svg'
import logoDark from './assets/images/logo_dark.svg'
import menuLight from './assets/images/menu_light.svg'
import menuDark from './assets/images/menu_dark.svg'
import closeLight from './assets/images/closeIconWyt.svg'
import useElementOnScroll from './assets/useElementOnScroll';

function App() {
  const homeSection = useRef(null)
  const aboutSection = useRef(null)
  const projectsSection = useRef(null)
  const contactSection = useRef(null)
  const [mode,setMode] = useState('dark')
  const options = useMemo(()=>{
    return{
      root :null,
      rootMargin : '-100px',
      threshold:0
    }},[])
  const gotoSection = (sectionRef) =>{
    handleMenuClick()
    window.scrollTo({
      top:sectionRef.current.offsetTop,
      behavior:"smooth"
    })
  } 
  const [menuOpen, setMenuOpen]=useState(false)
  const isVisible = useElementOnScroll(homeSection,options)

  var icon = useMemo(()=>{return menuOpen? closeLight:((mode==='dark')?menuLight:menuDark)},[mode,menuOpen])
  const handleMenuClick=()=>{
        setMenuOpen( !menuOpen)
  }

  useEffect(
    ()=>{
      window.scrollTo({
        top:homeSection.current.offsetTop,
        behavior:"smooth"
      })
    },[]
  )
 
  return (
    <div className="App" data-visible={isVisible} data-mode={mode}>
         
      <div className="splash">
        <Lottie className='logo_splash' animationData={logoAnimate} loop={false}/>
      </div>
      
      <div className="navbar" data-visible={isVisible}>
            <a href='/'>
                    <Image
                    alt='logo'
                    className='logo'
                    src={(mode==='dark')? logoLight:logoDark}
                    />
                </a>
            <ul data-visible={menuOpen}>
                    
                    <li  onClick={()=>gotoSection(homeSection)}>
                        Home
                    </li>
                    <li onClick={()=>gotoSection(aboutSection)}>
                        About
                    </li>
                    <li onClick={()=>gotoSection(projectsSection)}>
                        Projects
                    </li>
                    
            </ul>
            <div className='navToogle'>
            <Button variant='outline-primary' id='sayHello' data-visible={menuOpen} onClick={()=>gotoSection(contactSection)}>
                    Say Hello
                </Button>
                <IconContext.Provider value={{size:'1.7rem',color:'#f3f3f3' }}  >
                  {
                    (mode==='dark')? 
                      <MdOutlineLightMode className='modeIcon'  data-mode='light' onClick={()=>setMode('light')}/>
                      :<MdOutlineDarkMode className='modeIcon' color='#482673' data-mode='dark' onClick={()=>setMode('dark')}/>
                  }
                    </IconContext.Provider>
            <Image 
                className='menuIcon' 
                alt='menu'
                src={icon} 
                loading='lazy'
                height={35} 
                width={35} 
                onClick={handleMenuClick}/>
            </div>
        </div>
      <div className="pages d-flex"  >
        <div ref={homeSection}>
        <Home mode={mode} offsetTopContact={contactSection.current}/>
        </div>
        <div ref={aboutSection}>
        <About mode={mode} />
        </div>
        <div ref={projectsSection}>
        <Projects/>
        </div>
        <div ref={contactSection}>
        <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
