import React, {Component} from "react";
import "./Art.css";

import owl from "./images/owl.jpg";
import elephant from "./images/elephant.jpg";
import island from "./images/island.jpg";
import egg from "./images/egg.jpg";
import jam from "./images/jam.jpg";
import monolith from "./images/monolith.jpg";
import turtle from "./images/turtle.jpg";
import whale from "./images/whale.jpg";
import coffee from "./images/coffee.jpg";
import sam from "./images/sam.jpg";

var picIndex = 1;

function plusPic() {
  showPic(picIndex += 1);
}

function minusPic() {
  showPic(picIndex -= 1);
}

function showPic(n) {
  var i;
  const pics = document.getElementsByClassName("artSlide");

  if (n > pics.length) {picIndex = 1}
  if (n < 1) {picIndex = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
  }

  pics[picIndex-1].style.display = "block";
}

var delay = 0;
var offset = 50;

class Art extends Component{
	componentDidMount(){
		showPic(picIndex);
	}
	render(){
		return (
			<div id = "Art">
			    <hr className = "hr3"></hr>
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
						a
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						r
					</span>
				</span>
				<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
					<span className="title2">
						t
					</span>
				</span>
				<div className="slideshow" data-aos="fade-in" data-aos-once="true" data-aos-delay={delay+=500}>
					<div className="slideshowCenter">
						<a className="arrow" onClick={minusPic}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
							</svg>
						</a>
						<div className="artSlide fade">
							<div className="number">1/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Nested </div>
								<img className="picImage" src={egg}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">2/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Space Jam </div>
								<img className="picImage" src={jam}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">3/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Innocent </div>
								<img className="picImage" src={turtle}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">4/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Ancient </div>
								<img className="picImage" src={elephant}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">5/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Wise </div>
								<img className="picImage" src={owl}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">6/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Contaminated </div>
								<img className="picImage" src={whale}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">7/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Monolith </div>
								<img className="picImage" src={monolith}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">8/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Adrift </div>
								<img className="picImage" src={island}/>
							</div>
						</div>
						<div className="artSlide fade">
							<div className="number">9/9</div>
							<div className="picTitleContainer">
								<div className="picTitle"> Morning Coffee </div>
								<img className="picImage" src={coffee}/>
							</div>
						</div>
						<a className="arrow" onClick={plusPic}>
							<svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
							    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Art;