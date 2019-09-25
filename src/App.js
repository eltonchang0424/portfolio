import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Collapsible from 'react-collapsible';

import logo from './assets/logo.png'

import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Art from './Art.js'
import Contact from './Contact.js'

import aos from 'aos';
import 'aos/dist/aos.css';

aos.init();

const particleParams = {
  particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 1500
              }
          },
          line_linked: {
              enable: true,
              opacity: 0.05
          },
          move: {
              direction: "right",
              speed: 0.1
          },
          size: {
              value: 1
          },
          opacity: {
              anim: {
                  enable: true,
                  speed: 1.5,
                  opacity_min: 0.05
              }
          }
      },
      interactivity: {
          events: {
              onhover: {
                  enable: true,
                  mode: "repulse"
              }
          },
          modes: {
              repulse: {
                  distance: 50
              }
          },
      },
      retina_detect: true
}

function App() {
  return (
    <>
      <div className = "divStyle">
        <div className = "h2divStyle"
                  data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-once="true">
          <a href="#Skills" className = "h2Style">EXPERIENCE</a>
        </div>
        <div className = "h2divStyle"
                   data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true">
           <a href="#Projects" 
              className = "h2Style">PROJECTS</a>
        </div>
        <div className = "h2divStyle"
                  data-aos="fade-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-once="true">
          <a href="#About" className = "logoButton">
          <img className = "logo" 
           src = {logo}
          />
          </a>
        </div>
        <div className = "h2divStyle"
                  data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true">
          <a href="#Art" className = "h2Style">ART</a>
        </div>
        <div className = "h2divStyle"
                  data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-once="true">
          <a href="#Contact" className = "h2Style">CONTACT</a>
        </div>
      </div>  
      <div className = "content">
        <Particles className = "particles"
         params = {particleParams}/>
        <About/>
        <Skills/>
        <Projects/>
        <Art/>
        <Contact/>
      </div>
    </>

  );
}

export default App;
