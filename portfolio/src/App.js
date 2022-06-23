import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <div className="pages d-flex">
        <Home/>
        <Projects/>
        <About/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
