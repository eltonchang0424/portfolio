import React, {Component} from "react";
import "./About.css";

import prof from "./images/sfprof.png";
import resume from "./images/Resume-final.pdf"

var delay = 0;
var offset = 50;

class About extends Component{
	render(){
		return (
			<div id = "About">
			    <hr className = "hr1"></hr>
				<div className="About">
					<div className="aboutText">
						<span className="text" data-aos="flip-up" data-aos-delay={delay}>
							<span className="title1">
								A
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								b
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								o
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								u
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								t
							</span>
						</span>
						<span className="spaceTitle">
		                	&nbsp;
		             	</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title2">
								m
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title2">
								e
							</span>
						</span>
						<br></br><br></br><br></br><br></br>
						<span className="info" data-aos="fade-right" data-aos-delay={delay+=300}>
							Hey there! I’m Elton. I’m currently a junior studying computer science at UC Irvine. Ranging from artificial intelligence to web development, I’m always trying to learn something new. I will always enjoy a good puzzle, and to me, the field of computer science is full of them, just waiting to be solved.
							<br></br><br></br>
							Whenever I’m not busy working on schoolwork or personal projects, I enjoy playing the piano or doodling away mindlessly. Feel free to browse through what I’ve done!
							<br></br><br></br>
							Below are some of the tools I’ve used in my projects.<br></br><br></br>
						</span>
						<div className="lists" data-aos="fade-right" data-aos-delay={delay+=300}>
							<ul>
								<span className="listTitle"> Languages<br></br><br></br></span>
								<li>Python</li>
								<li>C#</li>
								<li>C++</li>
								<li>Java</li>
								<li>JavaScript</li>
								<li>HTML</li>
								<li>CSS</li>
							</ul>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<ul>
								<span className="listTitle"> Technologies<br></br><br></br> </span>
								<li>NodeJS</li>
								<li>React</li>
								<li>Flask</li>
								<li>Unity</li>
								<li>Adobe Photoshop</li>
							</ul>
						</div>
					</div>
					<div className="rightSide" data-aos="fade-in" data-aos-delay={delay}>
						<img className="prof"
							src = {prof}
						/>
						<a href={resume} target="_blank" className="learnMore">Resume</a>
					</div>
				</div>
			</div>
		);
	}
}

export default About;