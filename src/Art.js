import React, {Component} from "react";
import "./Art.css";
import aos from 'aos';
import 'aos/dist/aos.css';

import egg from './assets/art/egg.jpg'
import elephant from './assets/art/elephant.jpg'
import island from './assets/art/island.jpg'
import jam from './assets/art/jam.jpg'
import monolith from './assets/art/monolith.jpg'
import owl from './assets/art/owl.jpg'
import turtle from './assets/art/turtle.jpg'
import whale from './assets/art/whale.jpg'

aos.init();

class Art extends Component{
	componentDidMount(){
		var modal = document.getElementsByClassName("myImgFull");

		// Get the button that opens the modal
		var btn = document.getElementsByClassName("myImg");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("closeImg");

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

		btn[5].onclick = function() {
		  modal[5].style.display = "block";
		}

		btn[6].onclick = function() {
		  modal[6].style.display = "block";
		}

		btn[7].onclick = function() {
		  modal[7].style.display = "block";
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

		span[5].onclick = function() {
		  modal[5].style.display = "none";
		}

		span[6].onclick = function() {
		  modal[6].style.display = "none";
		}

		span[7].onclick = function() {
		  modal[7].style.display = "none";
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

		  if (event.target == modal[5]) {
		    modal[4].style.display = "none";
		  }

		  if (event.target == modal[6]) {
		    modal[4].style.display = "none";
		  }

		  if (event.target == modal[7]) {
		    modal[4].style.display = "none";
		  }
		}
	}
	render() {
		return (
			<div id = "Art">
				<h1 
				data-aos="slide-right"
				data-aos-delay="200"
				data-aos-duration="700"
				data-aos-once="true"
				className = "artHeader"><my className = "my">MY</my> ART</h1>
				<div className = "artLineOdd">
				<div data-aos="fade-up"
				data-aos-delay="700"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {turtle}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Young"</h1>
							<img className = "imgFull" src = {turtle}/>
						  </div>
					</div>

					</div>
					<div data-aos="fade-up"
				data-aos-delay="900"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {whale}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Contaminated"</h1>
							<img className = "imgFull" src = {whale}/>
						  </div>
					</div>

					</div>

					<div data-aos="fade-up"
				data-aos-delay="1100"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {jam}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Space Jam"</h1>
							<img className = "imgFull" src = {jam}/>
						  </div>
					</div>
					</div>
				</div>

				<div className = "artLineEven">
				<div data-aos="fade-up"
				data-aos-delay="1300"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {elephant}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Ancient"</h1>
							<img className = "imgFull" src = {elephant}/>
						  </div>

					</div>

					</div>
				<div data-aos="fade-up"
				data-aos-delay="1500"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {egg}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Nested"</h1>
							<img className = "imgFull" src = {egg}/>
						  </div>
					</div>
					</div>
				</div>

				<div className = "artLineOdd">
				<div data-aos="fade-up"
				data-aos-delay="1700"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {island}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Drifting"</h1>
							<img className = "imgFull" src = {island}/>
						  </div>
					</div>

					</div>
					<div data-aos="fade-up"
				data-aos-delay="1900"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {monolith}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Monolith"</h1>
							<img className = "imgFull" src = {monolith}/>
						  </div>
					</div>

					</div>

					<div data-aos="fade-up"
				data-aos-delay="2100"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor = "#Art"
				className = "artImg">

					<img className =  "myImg artImg" src = {owl}/>
					<div className="myImgFull modal">
						  <div className="modal-content">
						    <span className="closeImg close">&times;</span>
							<h1 className = "artTitle">"Wise"</h1>
							<img className = "imgFull" src = {owl}/>
						  </div>
					</div>
					</div>
				</div>
				<hr className = "hr"></hr>
			</div>
		);
	}
}

export default Art;