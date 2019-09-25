import React, {Component} from "react";
import "./Projects.css";

import aos from 'aos';
import 'aos/dist/aos.css';

import card from './assets/card.jpg'
import reclaimEarth from './assets/reclaimEarth.png'
import discord from './assets/discord.png'

aos.init();

class Projects extends Component{
	componentDidMount(){
		var modal = document.getElementsByClassName("myModal");

		// Get the button that opens the modal
		var btn = document.getElementsByClassName("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close");

		// When the user clicks the button, open the modal 
		btn[0].onclick = function() {
		  modal[0].style.display = "block";
		}

		btn[1].onclick = function() {
		  modal[1].style.display = "block";
		}

		btn[2].onclick = function() {
		  modal[2].style.display = "block";
		}

		btn[3].onclick = function() {
		  modal[3].style.display = "block";
		}

		btn[4].onclick = function() {
		  modal[4].style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span[0].onclick = function() {
		  modal[0].style.display = "none";
		}

		span[1].onclick = function() {
		  modal[1].style.display = "none";
		}

		span[2].onclick = function() {
		  modal[2].style.display = "none";
		}

		span[3].onclick = function() {
		  modal[3].style.display = "none";
		}

		span[4].onclick = function() {
		  modal[4].style.display = "none";
		}


		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal[0]) {
		    modal[0].style.display = "none";
		  }

		  if (event.target == modal[1]) {
		    modal[1].style.display = "none";
		  }

		  if (event.target == modal[2]) {
		    modal[2].style.display = "none";
		  }

		  if (event.target == modal[3]) {
		    modal[3].style.display = "none";
		  }

		  if (event.target == modal[4]) {
		    modal[4].style.display = "none";
		  }
		}
	}
	render() {
		return (
			<div id = "Projects">

				<h1 
				data-aos="slide-right"
				data-aos-delay="200"
				data-aos-duration="700"
				data-aos-once="true"
				className = "header"><my className = "my">MY</my> PROJECTS</h1>
				<div className = "projectDiv">
					<div data-aos="fade-up"
				data-aos-delay="900"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Projects"
				className = "project">
						<h1 className = "projectText">Flip Flop</h1>
						<h2 className = "projectDesc">A 2D Hyper Casual Game</h2>
						<button id="myBtn" className = "myBtn btn">Learn More</button>

						<div className="myModal modal">
						  <div className="modal-content">
						    <span className="close">&times;</span>
						    <div className = "projectSplit">
						    	<div className = "text">
							    	<h1 className = "textTitle">Flip Flop</h1>
							    	<h2 className = "date">September 2018</h2>
							    	<p className = "desc">Flip Flop is a 2D mobile hyper casual-esque game made in Unity using C#. The object of the game is to get the highest score possible by collecting the stars, while avoiding the shadows that follow your previous moves. Gravity also switches every 5 seconds and a new shadow spawns every 5 points, so be wary!</p>
							    </div>
							    <div className = "game">
							    	<iframe id = "game" src="https://i.simmer.io/@eltonchang0424/flip-flop"></iframe>
							    </div>
						    </div>
						  </div>
						</div>

					</div>
					<div data-aos="fade-up"
				data-aos-delay="1100"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Projects"
				className = "project">
						<h1 className = "projectText">FlappyAI</h1>
						<h2 className = "projectDesc">AI that plays Flappy Bird</h2>
						<button id="myBtn" className = " myBtn btn">Learn More</button>

						<div className="myModal modal">
						  <div className="modal-content">
						    <span className="close">&times;</span>
						    <div className = "projectSplit">
						    	<div className = "text">
							    	<h1 className = "textTitle">FlappyAI</h1>
							    	<h2 className = "date">November 2018</h2>
							    	<p className = "desc">FlappyAI is an artificial intelligence program made in Unity using C# that uses the genetic algorithm to play the Flappy Bird game. I built the neural network system from scratch. <br></br><br></br>The genetic algorithm models real life evolution, where the organisms with ideal traits have a higher survival rate, thus becoming more likely to pass down their genes to their children, and the cycle repeats. Similarly, in this game, how "good" each bird is is based on how far each one flies. The farther a bird flies, the more likely that their "genes" will be passed on over to the next generation, until eventually the perfect birds that never die are created. <br></br><br></br>This process mostly relies on luck, so the results vary a lot. However, from my experience, the birds are usually trained within 20-50 generations.</p>
							    </div>
							    <div className = "game">
							    	<iframe id = "flappy" src="https://i.simmer.io/@eltonchang0424/flappy-ai"></iframe>

							    </div>
						    </div>
						  </div>
						</div>

					</div>

					<div data-aos="fade-up"
				data-aos-delay="1300"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Projects"
				className = "project">
						<h1 className = "projectText">cARd</h1>
						<h2 className = "projectDesc">Augmented Reality Cards</h2>
						<button id="myBtn" className = " myBtn btn">Learn More</button>

						<div className="myModal modal">
						  <div className="modal-content">
						    <span className="close">&times;</span>
						    <div className = "projectSplit">
						    	<div className = "text">
							    	<h1 className = "textTitle">cARd</h1>
							    	<h2 className = "date">April 2019 - May 2019</h2>
							    	<p className = "desc">cARd is an augmented reality card game that allows users to play cards on the go made in Unity using C# and ARCore. There are many functionalities, such as discarding, rotating, and zooming in on cards, as well as a shuffled deck, allowing users draw cards and play them as needed.</p>
							    	</div>
							    <div className = "game">
							    	<img className = "img"
						           src = {card}
						          />
							    </div>
						    </div>
						  </div>
						</div>

					</div>
				</div>

				<div className = "projectDiv2">
					<div data-aos="fade-up"
				data-aos-delay="1500"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Projects"
				className = "project">
						<h1 className = "projectText">ReclaimEarth</h1>
						<h2 className = "projectDesc">Crowdsourcing site to save the Earth</h2>
						<button id="myBtn" className = " myBtn btn">Learn More</button>

						<div className="myModal modal2">
						  <div className="modal-content">
						    <span className="close">&times;</span>
						    <div className = "projectSplit">
						    	<div className = "text">
							    	<h1 className = "textTitle">ReclaimEarth</h1>
							    	<h2 className = "date">April 2019</h2>
							    	<p className = "desc">ReclaimEarth is a project made for CitrusHack 2019. It is a crowdsourcing website to help clean up trash around the world. Users can login using Google, and help "ping" out any amount of litter they spot. Other users can then see these pings, and if nearby, can help clean up the trash there. There are different intensity levels for pings, indicating how much trash there is, as well a an option to upload pictures. There is also a point system, where your avatar levels up and you earn more points by helping clean and mark areas with trash. <br></br><br></br> I worked on the frontend of the website, using HTML and CSS to create a smooth UI, as well as making all the graphics for the website.<br></br><br></br> You can checkout ReclaimEarth <a href="https://reclaimearth.herokuapp.com/">here</a>.</p>
							    	</div>
							    <div className = "game">
							    	<img className = "img"
						           src = {reclaimEarth}
						          />
						          </div>
						    </div>
						  </div>
						</div>

					</div>
					<div data-aos="fade-up"
				data-aos-delay="1700"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Projects"
				className = "project">
						<h1 className = "projectText">boot</h1>
						<h2 className = "projectDesc">A Multipurpose Discord Bot</h2>
						<button id="myBtn" className = " myBtn btn">Learn More</button>

						<div className="myModal modal2">
						  <div className="modal-content">
						    <span className="close">&times;</span>
						    <div className = "projectSplit">
						    	<div className = "text">
							    	<h1 className = "textTitle">Discord Bot</h1>
							    	<h2 className = "date">August 2019 - September 2019</h2>
							    	<p className = "desc">boot is a Discrod bot with multiple features, ranging from allowing 2 users to play TicTacToe to explicit content filtering, from plain chat to the music played. The music filter uses the MusixMatch API. boot was built using JavaScript, the DiscordJS library, NodeJS, and external APIs.</p>
							    	</div>
							    <div className = "game">
							    	<img className = "disc"
						           src = {discord}
						          />
						        </div>
						    </div>
						  </div>
						</div>

					</div>
				</div>
				<hr className = "hr"></hr>
			</div>
		);
	}
}

export default Projects;