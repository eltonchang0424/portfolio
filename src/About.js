import React, {Component} from "react";
import "./About.css";
import prof from "./assets/prof.png"
import aos from 'aos';
import 'aos/dist/aos.css';
import resume from './assets/Resume_final.pdf'

var today = new Date()
var curHr = today.getHours()

function greeting()
{
	if (curHr < 12) {
	  return <h1 className = "h1">Good Morning! <intro 
	  						data-aos="fade-in"
							data-aos-delay="1300"
							data-aos-duration="1000"
							data-aos-once="true"
							data-aos-mirror="false">I'm <name className = "name"> ELTON</name>. </intro></h1>;
	} else if (curHr < 18) {
	  return <h1 className = "h1">Good Afternoon! <intro 
	  						data-aos="fade-in"
							data-aos-delay="1300"
							data-aos-duration="1000"
							data-aos-once="true"
							data-aos-mirror="false">I'm <name className = "name"> ELTON</name>. </intro></h1>;
	} else {
	  return <h1 className = "h1">Good Evening! <intro 
	  						data-aos="fade-in"
							data-aos-delay="1300"
							data-aos-duration="1000"
							data-aos-once="true"
							data-aos-mirror="false">I'm <name className = "name"> ELTON</name>. </intro></h1>;
	}
}

aos.init();

class About extends Component{
	render() {
		return (
			<div id = "About">
				<div>
					<div className = "welcome_text">
						<div>
							<h1 data-aos="fade-in"
							data-aos-delay="800"
							data-aos-duration="1000"
							data-aos-once="true"
							> {greeting()}</h1>
							<h1
							data-aos="flip-up"
							data-aos-delay="1800"
							data-aos-once="true"
							className = "h1Sub"> I stand on the intersection where <art className = "art">ART</art> and <technology className = "tech">TECHNOLOGY</technology> meet. </h1>
							<p 
							data-aos="flip-up"
							data-aos-delay="2100"
							data-aos-once="true"
							className = "bio"> I'm currently a junior studying computer science at UC Irvine and pursuing a minor in digital art. I love art and music and will always appreciate a good puzzle. Whenever I'm not busy working on schoolwork or personal projects, I like to play the piano or just doodle away mindlessly. As a computer science major and an avid drawing enthusiast, I stand on the intersection of where coding and art meet, and seek to combine these two opposite ends of the spectrum. Feel free to browse through what I’ve done!</p>
						</div>
						<img data-aos="fade-left"
							data-aos-delay="1800"
							data-aos-duration = "1500"
							data-aos-mirror="false"className = "profile_pic"
						 src = {prof}
						/>
					</div>
					<div 					
							data-aos="fade-up"
							data-aos-delay="2400"
							data-aos-once="true">
						<a href={resume} className="resume">MY RESUME</a>
					</div>
				</div>
				<hr className = "hr"></hr>
			</div>
		);
	}
}

export default About;