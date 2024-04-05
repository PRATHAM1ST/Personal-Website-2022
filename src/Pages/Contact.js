import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Github } from "../Assets/SVG/github.svg";
import { ReactComponent as LinkedIn } from "../Assets/SVG/linkedin.svg";
import { ReactComponent as Instagram } from "../Assets/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../Assets/SVG/twitter.svg";
import { ReactComponent as Hackster } from "../Assets/SVG/hackster.svg";
import { ReactComponent as StackOverflow } from "../Assets/SVG/stackoverflow.svg";
import { ReactComponent as Email } from "../Assets/SVG/email.svg";

import "../Css/Contact.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FooterNav from "../Components/FooterNav";
import Metadata from "../Components/metadata.js";

export default function Contact() {

	Metadata({
		title: "C O N T A C T - Web Developer | Showcasing My Work",
		description: "Contact Pratham Chudasama, a web developer and programmer, via email or social media. View his resume and explore his work on Github and Hackster.",
		keywords: "web development, programming, personal website",
		overflowHidden: true,
	});

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);

	useEffect(() => {
		if (!titleRef.current || !descriptionRef.current )
			return;

		gsap.from(titleRef.current, {
			duration: 1,
			opacity: 0,
			y: -100,
		});

		gsap.from(descriptionRef.current.children, {
			delay: 2,
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.25,
		});

	}, [titleRef, descriptionRef]);

	return (
		<>
			<div id="Contact">
				<h1 className="title-name stop-title" ref={titleRef}>
					Hello!!!
				</h1>
				<div className="description" ref={descriptionRef}>
					<div className="mail-address">
						<label htmlFor="email">Email</label>
						<a
							id="email"
							href={"mailto:" + process.env.REACT_APP_EMAIL}
							target="_blank"
							rel="noreferrer"
						>
							{process.env.REACT_APP_EMAIL}
							<Email alt="email" />
						</a>
					</div>
					<div className="internet-links">
						<label>On The Internet</label>
						<a
							id="github"
							href={process.env.REACT_APP_GITHUB_URL}
							target="_blank"
							rel="noreferrer"
						>
							Github
							<Github alt="github" />
						</a>
						<a
							id="linkedin"
							href={process.env.REACT_APP_LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
							<LinkedIn alt="linkedin" />
						</a>
						<a
							id="instagram"
							href={process.env.REACT_APP_INSTAGRAM_URL}
							target="_blank"
							rel="noreferrer"
						>
							Instagram
							<Instagram alt="instagram" />
						</a>
						<a
							id="twitter"
							href={process.env.REACT_APP_TWITTER_URL}
							target="_blank"
							rel="noreferrer"
						>
							Twitter
							<Twitter alt="twitter" />
						</a>
						<a
							id="hackster"
							href={process.env.REACT_APP_HACKSTER_URL}
							target="_blank"
							rel="noreferrer"
						>
							Hackster
							<Hackster alt="hackster" />
						</a>
						<a
							id="stackoverflow"
							href={process.env.REACT_APP_STACKOVERFLOW_URL}
							target="_blank"
							rel="noreferrer"
						>
							Stackoverflow
							<StackOverflow alt="stackoverflow" />
						</a>
					</div>
					<div className="resume-link">
						<label htmlFor="resume">My Resume</label>
						<a
							id="resume"
							href={process.env.REACT_APP_RESUME_URL}
							target="_blank"
							rel="noreferrer"
						>
							Resume
							<Link alt="link" />
						</a>
					</div>
				</div>
				<FooterNav title={"Home"} link={"/"} />
			</div>
		</>
	);
}
