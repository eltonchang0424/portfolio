import React, {Component} from "react";
import "./Contact.css";


import aos from 'aos';
import 'aos/dist/aos.css';

aos.init();

class Contact extends Component{
	render() {
		return (
			<div id = "Contact" className = "section">
				<h1 
				data-aos="fade-up"
				data-aos-delay="300"
				data-aos-duration="700"
				data-aos-once="true"
				className = "contactTitle">CONTACT ME</h1>
				<h2 
				data-aos="fade-in"
				data-aos-delay="800"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor="#Contact"
				className = "contactDesc">Feel free to ask me anything! <br></br><br></br><contact data-aos="fade-in"
				data-aos-delay="1300"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor="#Contact"className = "contact">eltonchang0424@gmail.com<br></br>(408)600-9749</contact><br></br><br></br></h2>

				<div className = "iconsContact">
				<div data-aos="fade-up"
				data-aos-delay="1500"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor="#Contact">
					<a href = "https://github.com/eltonchang0424">
					<svg className = "iconContact" viewBox="0 0 24 24">
    					    <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
    				</svg>
					</a>
					</div>
				<div data-aos="fade-up"
				data-aos-delay="1700"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor="#Contact">
					<a href = "https://www.linkedin.com/in/elton-c-19b02bb8/">
					<svg className = "iconContact" viewBox="0 0 24 24">
    					 	<path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
    					 </svg>
					</a>
					</div>
				<div data-aos="fade-up"
				data-aos-delay="1900"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor="#Contact">
					<a href = "https://www.facebook.com/profile.php?id=100009282325579">
					<svg className = "iconContact" viewBox="0 0 24 24">
    					        <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
    					        </svg>
					</a>
					</div>
				<div data-aos="fade-up"
				data-aos-delay="2100"
				data-aos-duration="700"
				data-aos-once="true"
				data-aos-anchor="#Contact">
					<a href = "https://www.instagram.com/eltnc/">
					<svg className = "iconContact" viewBox="0 0 24 24">
    					 	    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    					 	    </svg>
					</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;