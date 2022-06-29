import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef,useState } from 'react';
import { Button,Image } from 'react-bootstrap';

import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import logo from './assets/images/logo_footer.png'
import menuIcon from './assets/images/menu.png'
import closeIcon from './assets/images/closeIconWyt.png'
import useElementOnScroll from './assets/useElementOnScroll';
function App() {
  const homeSection = useRef(null)
  const aboutSection = useRef(null)
  const projectsSection = useRef(null)
  const contactSection = useRef(null)
  console.log(aboutSection)
  const gotoSection = (sectionRef) =>{
    window.scrollTo({
      top:sectionRef.current.offsetTop,
      behavior:"smooth"
    })
  } 
  const [menuOpen, setMenuOpen]=useState(false)
  const isVisible = useElementOnScroll(homeSection)

  var [icon,setIcon] = useState(menuIcon)
  const handleMenuClick=()=>{
      menuOpen? setIcon(menuIcon):setIcon(closeIcon)
      setMenuOpen( !menuOpen)
  }
  return (
    <div className="App">
      <div className="navbar" data-visible={isVisible}>
            <a href='/'>
                    <Image
                    className='logo'
                    loading='lazy'
                    src={logo}
                    />
                </a>
            <ul data-visible={menuOpen}>
                    <li onClick={()=>gotoSection(homeSection)}>
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
            <Button variant='outline-primary' id='sayHello' onClick={()=>gotoSection(contactSection)}>
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
        </div>
      <div className="pages d-flex"  >
        <div ref={homeSection}>
        <Home/>
        </div>
        <div ref={aboutSection}>
        <About />
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
