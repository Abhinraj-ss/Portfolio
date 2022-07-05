import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef,useState,useMemo, useEffect } from 'react';
import { Button} from 'react-bootstrap';
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import Lottie from "lottie-react";
import logoAnimate from './assets/images/ar-logo-ae.json';


import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import useElementOnScroll from './assets/useElementOnScroll';
import Logo from './assets/Logo';
import CloseIcon from './assets/CloseIcon';
import MenuIcon from './assets/MenuIcon';

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
    if(menuOpen){
      handleMenuClick()
    } 
    window.scrollTo({
      top:sectionRef.current.offsetTop,
      behavior:"smooth"
    })
  } 
  const [menuOpen, setMenuOpen]=useState(false)
  const isVisible = useElementOnScroll(homeSection,options)


  const handleMenuClick=()=>{
        setMenuOpen(!menuOpen)
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
                <Logo 
                    alt='logo'
                    className='logo'
                    fill={(mode==='dark')? '#fff':'#482673'}/>
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
            {
              menuOpen? <CloseIcon alt='menu'className='menuIcon' onClick={handleMenuClick}/>:
              ((mode==='light')?
              <MenuIcon className='menuIcon' 
              alt='menu' bg='#482673' outline='none' stroke='none' onClick={handleMenuClick}/>: 
              <MenuIcon className='menuIcon' 
              alt='menu' bg='#0a192f' outline='#de354c' stroke='#fff' onClick={handleMenuClick}/>)
            }
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
