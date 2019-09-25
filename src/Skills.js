import React, {Component} from "react";
import "./Skills.css";
import Collapsible from 'react-collapsible';

import pyth from "./assets/experience/python_circle.png"
import cplusplus from "./assets/experience/c++_circle.png"
import csharp from "./assets/experience/csharp_circle.png"
import java from "./assets/experience/java_circle.png"
import js from "./assets/experience/javascript_circle.png"
import html from "./assets/experience/html_circle.png"
import css from "./assets/experience/css_circle.png"

import node from "./assets/experience/node.png"
import react from "./assets/experience/react.png"
import unity from "./assets/experience/unity.png"
import ps from "./assets/experience/ps.png"
import ai from "./assets/experience/ai.png"
import id from "./assets/experience/id.png"

import piano from "./assets/experience/piano.png"
import drawing from "./assets/experience/drawing.png"
import eye from "./assets/experience/eye.png"
import brain from "./assets/experience/brain.png"

import aos from 'aos';
import 'aos/dist/aos.css';

aos.init();

class Skills extends Component{
	render() {
		return (
			<div id = "Skills" className = "section">
				<h1 
				data-aos="slide-right"
				data-aos-delay="300"
				data-aos-duration="700"
				data-aos-once="true"
				className = "title">
				<my className = "my">MY</my> EXPERIENCE</h1>
				<div className = "exp">
					<div 
					data-aos="fade-in"
					data-aos-delay="900"
					data-aos-duration="1000"
					data-aos-once="true"
					data-aos-anchor = "#Skills"
					className = "languages">
						<h1 className = "lang">LANGUAGES</h1>
						<div className = "icons">
							<img className = "icon"
							 src = {pyth}
							 />
							 <h2 className = "languages">Python</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {cplusplus}
							 />
							 <h2 className = "languages">C++</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {csharp}
							 />
							 <h2 className = "languages">C#</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {java}
							 />
							 <h2 className = "languages">Java</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {js}
							 />
							 <h2 className = "languages">JavaScript</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {html}
							 />
							 <h2 className = "languages">HTML</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {css}
							 />
							 <h2 className = "languages">CSS</h2>
						 </div>
					 </div>
					 <div 
					  	data-aos="fade-in"
						data-aos-delay="1200"
						data-aos-duration="1200"
						data-aos-once="true"
						data-aos-anchor = "#Skills"
						className = "technologies">
					 	<h1 className = "techn">TECHNOLOGIES</h1>
						 <div className = "icons">
							<img className = "icon"
							 src = {node}
							 />
							 <h2 className = "languages">NodeJS</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {react}
							 />
							 <h2 className = "languages">React</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {unity}
							 />
							 <h2 className = "languages">Unity</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {ps}
							 />
							 <h2 className = "languages">Adobe Photoshop</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {ai}
							 />
							 <h2 className = "languages">Adobe Illustrator</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {id}
							 />
							 <h2 className = "languages">Adobe InDesign</h2>
						 </div>
					 </div>
					 <div 
					 	data-aos="fade-in"
						data-aos-delay="1500"
						data-aos-duration="1000"
						data-aos-anchor = "#Skills"
						data-aos-once="true"
						className = "technologies">
					 	<h1 className = "skills">SKILLS</h1>
						 <div className = "icons">
							<img className = "icon"
							 src = {drawing}
							 />
							 <h2 className = "languages">Graphic Design</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {piano}
							 />
							 <h2 className = "languages">Piano</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {eye}
							 />
							 <h2 className = "languages">High Attention to Detail</h2>
						 </div>
						 <div className = "icons">
							<img className = "icon"
							 src = {brain}
							 />
							 <h2 className = "languages">Creative and Critical Thinking</h2>
						 </div>
					 </div>
				</div>
				<hr className = "hr"></hr>
			</div>

		);
	}
}

export default Skills;