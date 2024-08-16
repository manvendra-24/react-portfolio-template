import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services.js';
import Experiences from './Components/Experiences/Experiences.jsx';
import Work from './Components/Work/Work.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Testimonial from './Components/Testimonials/Testimonial.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import {themeContext} from './Context';
import {useContext} from 'react';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background:darkMode?'black':'',
        color:darkMode?'white':''
      }}
    >
      <Navbar/>
      <Intro />
      <Services />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
