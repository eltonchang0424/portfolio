import React, {Component} from "react";
import "./Contact.css";

var delay = 0;
var offset = 50;

class Contact extends Component{
	render(){
		return (
			<div id = "Contact">
			    <hr className = "hr4"></hr>
			    <div className="Contact">
				    <div className="contactTitle">
						<span className="text" data-aos="flip-up" data-aos-delay={delay}>
							<span className="title1">
								C
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								o
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								n
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								t
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								a
							</span>
						</span>
						<span className="text" data-aos="flip-up" data-aos-delay={delay+=offset}>
							<span className="title1">
								c
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
					</div>
					<br></br><br></br>
					<div className="contactInfoDesc" data-aos="fade-in" data-aos-delay={delay+=offset}>
						I'm currenty looking for a software internship, but feel free to ask me anything!<br></br>My contact information is below, and other links are on the right.
					</div>
					<br></br>
					<div className="contactInfoContainer" data-aos="fade-right" data-aos-delay={delay+=150}>
						<div className="contactInfo">
							<a href="mailto:eltonchang0424@gmail.com" className="emailButton">
								<svg style={{width:"16px", height:"16px"}} viewBox="0 0 24 24">
								    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
								</svg>
							</a>
							<span className="contactInfoText">
								eltonchang0424@gmail.com
							</span>
						</div>
						<div className="contactInfo">
							<a href="tel:4086009749" className="phoneButton">
								<svg style={{width:"16px", height:"16px"}} viewBox="0 0 24 24">
								    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
								</svg>
							</a>
							<span className="contactInfoText">
								(408)600-9749
							</span>
						</div>
					</div>
					<div className="copyright">
						© 2020 Elton Chang
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;