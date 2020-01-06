import React, {Component} from "react";
import "./Projects.css";

import card from "./images/card.jpg";
import card2 from "./images/card2.jpg";
import reclaimEarth from "./images/reclaimEarth.png";
import reclaimEarth2 from "./images/reclaimEarth2.png";
import boot from "./images/discord.png";

var slideIndex = 1;

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function slide1() {
	showSlides(slideIndex = 1);
}

function slide2() {
	showSlides(slideIndex = 2);
}

function slide3() {
	showSlides(slideIndex = 3);
}

function slide4() {
	showSlides(slideIndex = 4);
}

function slide5() {
	showSlides(slideIndex = 5);
}

function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("slide");
  const buttons = document.getElementsByClassName("thumbnailBtn");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      buttons[i].style.fill="rgba(0,255,186,1)";
      buttons[i].style.transition="0.3s";
      buttons[i].style.boxShadow="-3px -3px 3px 0 rgba(255,255,255,0.07),3px 3px 3px 0 rgba(0,0,0,0.35)";
  }

  slides[slideIndex-1].style.display = "flex";
  buttons[slideIndex-1].style.fill="rgba(255,29,93,1)";
  buttons[slideIndex-1].style.boxShadow="inset -2px -2px 3px 0 rgba(255,255,255,0.1),inset 2px 2px 3px 0 rgba(0,0,0,0.35)";
}

var delay = 0;
var offset = 50;

class Projects extends Component{
	componentDidMount(){
		showSlides(slideIndex);
	}
	render(){
		return (
			<div id = "Projects">
			    <hr className = "hr2"></hr>
				<span className="text" data-aos="flip-up" data-aos-delay={delay}>
					<span className="title1">
						M
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title1">
						y
					</span>
				</span>
				<span className="spaceTitle">
                	&nbsp;
             	</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						p
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						r
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						o
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						j
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						e
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						c
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						t
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						s
					</span>
				</span>
				<div className="slideshow" data-aos="fade-in" data-aos-once="true" data-aos-delay={delay+=500}>
					<div className="slideshowCenter">
						<a className="arrow" onClick={minusSlide}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
							</svg>
						</a>
						<div className="slide fade">
							<div className="slideText">
								<div className="slideTitle">
									Flip Flop
								</div>
								<div className="slideDate">
									September 2018<br></br><br></br>
								</div>
								<div className="slideDesc">
									Flip Flop is a 2D mobile hyper casual-esque game made in Unity using C#. The object of the game is to get the highest score possible by collecting the stars, while avoiding the shadows that follow your previous moves. Gravity also switches every 5 seconds and a new shadow spawns every 5 points, so be wary!<br></br><br></br>You can see the code <a className="link" target="_blank" href="https://github.com/eltonchang0424/FlipFlop">here</a>.
								</div>
							</div>
							<div className = "gameContainer">
						    	<iframe className = "game" src="https://i.simmer.io/@eltonchang0424/flip-flop"></iframe>
						    </div>
						</div>
						<div className="slide fade">
							<div className="slideText">
								<div className="slideTitle">
									FlappyAI
								</div>
								<div className="slideDate">
									November 2018<br></br><br></br>
								</div>
								<div className="slideDesc">
									FlappyAI is an artificial intelligence program made in Unity using C# that uses the genetic algorithm to play the Flappy Bird game. I built the neural network system from scratch.<br></br><br></br>The genetic algorithm models real life evolution, where the organisms with ideal traits have a higher survival rate, thus becoming more likely to pass down their genes to their children, and the cycle repeats. Here, how "good" each bird is is based on how far each one flies. The farther a bird flies, the more likely that their "genes" will be passed on over to the next generation, until eventually the perfect birds that never die are created. The "genes" here are sensors that detect how close a bird is from the pipe.<br></br><br></br>This process mostly relies on luck, so the results vary a lot. However, from my experience, the birds are usually trained within 20-50 generations.<br></br><br></br>You can see the code <a className="link" target="_blank" href="https://github.com/eltonchang0424/FlappyAI">here</a>.
								</div>
							</div>
							<div className = "flappyContainer">
						    	<iframe className = "flappy" src="https://i.simmer.io/@eltonchang0424/flappy-ai"></iframe>
						    </div>
						</div>
						<div className="slide fade">
							<div className="slideText">
								<div className="slideTitle">
									cARd
								</div>
								<div className="slideDate">
									April - May 2019<br></br><br></br>
								</div>
								<div className="slideDesc">
									cARd is an augmented reality card game that allows users to play cards on the go made in Unity using C# and ARCore. There are many functionalities, such as discarding, rotating, and zooming in on cards, as well as a shuffled deck, allowing users draw cards and play them as needed.<br></br><br></br>This was a project for our school's App Dev Club, where I teamed up with three other people. I worked on the user interface as well as generating the shuffled cards, putting them from the field into the user's hand.<br></br><br></br>You can see the code <a className="link" target="_blank" href="https://github.com/eltonchang0424/cARd">here</a>.
								</div>
							</div>
							<div className="projectPicContainer">
								<img className="projectPic" src={card}/>
								<img className="projectPic" src={card2}/>
							</div>
						</div>
						<div className="slide fade">
							<div className="slideText">
								<div className="slideTitle">
									reclaimEarth
								</div>
								<div className="slideDate">
									April 2019<br></br><br></br>
								</div>
								<div className="slideDesc">
									reclaimEarth is a project made for CitrusHack 2019, where I teamed up with two other people. It is a crowdsourcing website to help clean up trash around the world. Users can login using Google, and help "ping" out any amount of litter they spot. Other users can then see these pings, and if nearby, can help clean up the trash there. There are different intensity levels for pings, indicating how much trash there is, as well as an option to upload pictures. There is also a point system, where your avatar levels up and you earn more points by helping clean and mark areas with trash.<br></br><br></br>I worked on the frontend of the website, using HTML and CSS to create a smooth UI, as well as making all the graphics for the website.<br></br><br></br>You can checkout reclaimEarth <a className="link" target="_blank" href="https://reclaimearth.herokuapp.com/">here</a>.<br></br><br></br>You can see the code <a className="link" target="_blank" href="https://github.com/eltonchang0424/reclaimearth">here</a>.
								</div>
							</div>
							<div className="projectPicContainer">
								<img className="projectPic" src={reclaimEarth}/>
								<img className="projectPic" src={reclaimEarth2}/>
							</div>
						</div>
						<div className="slide fade">
							<div className="slideText">
								<div className="slideTitle">
									boot
								</div>
								<div className="slideDate">
									August - September 2019<br></br><br></br>
								</div>
								<div className="slideDesc">
									boot is a Discord bot with multiple features, ranging from allowing 2 users to play TicTacToe to explicit content filtering, from plain chat to the music played. <br></br><br></br>The music filter uses the MusixMatch API, where the lyrics to a certain song are found and scanned for explicit content. If detected, boot skips the song. boot was built using JavaScript, the DiscordJS library, NodeJS, and external APIs.<br></br><br></br>You can see the code <a className="link" target="_blank" href="https://github.com/eltonchang0424/boot">here</a>.
								</div>
							</div>
							<img className="boot" src={boot}/>
						</div>
						<a className="arrow" onClick={plusSlide}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
							</svg>
						</a>
					</div>
					<div className="thumbnailBtnContainer" data-aos="fade-in" data-aos-delay="50" data-aos-once="true" data-aos-anchor="slideshow">
						<a className="thumbnailBtn" onClick={slide1}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H11V13H14V11H11V9H15V7H9Z" />
							</svg>
						</a>
						<a className="thumbnailBtn" onClick={slide2}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z" />
							</svg>
						</a>
						<a className="thumbnailBtn" onClick={slide3}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59" />
							</svg>
						</a>
						<a className="thumbnailBtn" onClick={slide4}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
							</svg>
						</a>
						<a className="thumbnailBtn" onClick={slide5}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;