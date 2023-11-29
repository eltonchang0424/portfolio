import React from 'react';
import './App.css';

import Particles from 'react-particles-js';
import aos from 'aos';
import 'aos/dist/aos.css';

import logo from './images/logo_v2.png';
import logo_background from './images/logo_diag.png';

import About from './About.js';
import Projects from './Projects.js';
import Art from './Art.js';
import Contact from './Contact.js'

aos.init({
 duration: 1200
});

const particleParams = {
  "particles": {
    "number": {
      "value": 75,
      "density": {
        "enable": true,
        "value_area": 1800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.15,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 70,
      "color": "#ffffff",
      "opacity": 0.15,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 10,
        "opacity": 1,
        "speed": 1
      },
      "repulse": {
        "distance": 100,
        "duration": 0.05
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

var today = new Date()
var curHr = today.getHours()

function greeting()
{
  if (curHr < 12) {
    return <div><span className="text" data-aos="flip-up" data-aos-delay={delay}><span className="header">G</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">d</span></span><span className="space">&nbsp;</span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">m</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">r</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">n</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">i</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">n</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">g</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">!</span></span></div>;
  } else if (curHr < 18) {
    return <div><span className="text" data-aos="flip-up" data-aos-delay={delay}><span className="header">G</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">d</span></span><span className="space">&nbsp;</span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">a</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">f</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">t</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">e</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">r</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">n</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">n</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">!</span></span></div>;
  } else {
    return <div><span className="text" data-aos="flip-up" data-aos-delay={delay}><span className="header">G</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">o</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">d</span></span><span className="space">&nbsp;</span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">e</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">v</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">e</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">n</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">i</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">n</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">g</span></span><span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}><span className="header">!</span></span></div>;
  }
}

const elements = document.getElementsByClassName('text');
function animationFinish()
{
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('animationend', function() {
      elements[i].classList.remove('animated');
    });

    elements[i].addEventListener('mouseover', function() {
      elements[i].classList.add('animated')
    })
  }
}
window.onload=animationFinish;

var delay = 150;
var offset = 50;

function App() {
  return (
    <>
      <Particles className = "particles"
        params = {particleParams}
      />
      <div className="landing" id="Landing">
        <div className="center">
          <div className="menuBar">
            <a href="#About" className="menuItem1">
              <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
              </svg>
            </a>
            <a href="#Projects" className="menuItem2">
              <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
                 <path d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3M10 7V5H8V17H20V5H18V7M15 15H10V13H15M18 11H10V9H18V11Z" />
                </svg>
            </a>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <svg className = "menuButton" style={{width:"24px", height:"45px"}} viewBox="0 0 24 24">
                <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
              </svg>
            </div>
            <a href="#Art" className="menuItem2">
              <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
                <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
              </svg>
            </a>
            <a href="#Contact" className="menuItem1">
              <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="background">
          <div className="content">
            <div className = "textContainer">
              <div className="greeting">
                {greeting()}
              </div>
              <span className="text" data-aos="flip-up" data-aos-delay={delay+=150}>
                <span className="header">
                  I
                </span>
              </span>
              <span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
                <span className="header">
                  '
                </span>
              </span>
              <span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
                <span className="header">
                  m
                </span>
              </span>
              <span className="space">
                &nbsp;
              </span>
              <span className="name" data-aos="flip-up" data-aos-delay={delay+=offset}>
                E
              </span>
              <span className="name" data-aos="flip-up" data-aos-delay={delay+=offset}>
                l
              </span>
              <span className="name" data-aos="flip-up" data-aos-delay={delay+=offset}>
                t
              </span>
              <span className="name" data-aos="flip-up" data-aos-delay={delay+=offset}>
                o
              </span>
              <span className="name" data-aos="flip-up" data-aos-delay={delay+=offset}>
                n
              </span>
              <span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
                <span className="header">
                  .
                </span>
              </span>
              <br></br><br></br>
              <span className="desc" data-aos="fade-right" data-aos-delay={delay+=offset}>
                Software Enthusiast
              </span>
              <span className="desc" data-aos="fade-right" data-aos-delay={delay+=offset}>
                &nbsp;/&nbsp;
              </span>
              <span className="desc" data-aos="fade-right" data-aos-delay={delay+=offset}>
                Aspiring Artist
              </span>
              <span className="desc" data-aos="fade-right" data-aos-delay={delay+=offset}>
                &nbsp;/&nbsp;
              </span>
              <span className="desc" data-aos="fade-right" data-aos-delay={delay+=offset}>
                Musician
              </span>
              <br></br><br></br><br></br><br></br> 
              <div data-aos="fade-in" data-aos-delay={delay+=offset}>
                <a href="#Contact" className="learnMore">
                  Contact me
                </a>
              </div>
            </div>
            <img className="logo_background" data-aos="fade-in" data-aos-delay="300"
              src = {logo_background}
            />
          </div>
        </div>
        <div className = "bar" data-aos="fade-left" data-aos-delay={1300}>
          <a href="#Landing" className = "logoButton">
            <img className = "logo" width = "10px" 
             src = {logo}
            />
          </a>
          <div className = "contact_bar">
            <a target="_blank" href = "https://github.com/eltonchang0424">
              <svg className = "iconContact1" viewBox="0 0 24 24"> 
                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
              </svg>
            </a>
            <a target="_blank" href = "https://www.linkedin.com/in/elton-c-19b02bb8/">
              <svg className = "iconContact2" viewBox="0 0 24 24">
                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a target="_blank" href = "https://www.facebook.com/profile.php?id=100009282325579">
              <svg className = "iconContact1" viewBox="0 0 24 24">
                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
              </svg>
            </a>
            <a target="_blank" href = "https://www.instagram.com/eltnc/">
              <svg className = "iconContact2" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="pages">
        <About/>
        <Projects/>
        <Art/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
