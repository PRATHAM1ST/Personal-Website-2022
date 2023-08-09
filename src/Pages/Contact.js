import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { ReactComponent as Github } from "../Assets/SVG/github.svg";
import { ReactComponent as LinkedIn } from "../Assets/SVG/linkedin.svg";
import { ReactComponent as Instagram } from "../Assets/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../Assets/SVG/twitter.svg";
import { ReactComponent as Hackster } from "../Assets/SVG/hackster.svg";
import { ReactComponent as Email } from "../Assets/SVG/email.svg";

import "../Css/Contact.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Contact() {
	document.body.style.overflow = "hidden";

	useEffect(() => {
		document.title = "C O N T A C T - Web Developer | Showcasing My Work";

		const metaDescription = document.createElement("meta");
		metaDescription.setAttribute("name", "description");
		metaDescription.setAttribute(
			"content",
			"Contact Pratham Chudasama, a web developer and programmer, via email or social media. View his resume and explore his work on Github and Hackster."
		);
		document.head.appendChild(metaDescription);

		const metaKeywords = document.createElement("meta");
		metaKeywords.setAttribute("name", "keywords");
		metaKeywords.setAttribute(
			"content",
			"web development, programming, personal website"
		);
		document.head.appendChild(metaKeywords);

		const metaAuthor = document.createElement("meta");
		metaAuthor.setAttribute("name", "author");
		metaAuthor.setAttribute("content", "Pratham Chudasama");
		document.head.appendChild(metaAuthor);

		const ogTitle = document.createElement("meta");
		ogTitle.setAttribute("property", "og:title");
		ogTitle.setAttribute("content", "C O N T A C T");
		document.head.appendChild(ogTitle);

		const ogUrl = document.createElement("meta");
		ogUrl.setAttribute("property", "og:url");
		ogUrl.setAttribute(
			"content",
			"https://www.pratham-chudasama.co/contact"
		);
		document.head.appendChild(ogUrl);

		const ogDescription = document.createElement("meta");
		ogDescription.setAttribute("property", "og:description");
		ogDescription.setAttribute(
			"content",
			"Contact Pratham Chudasama, a web developer and programmer, via email or social media. View his resume and explore his work on Github and Hackster."
		);
		document.head.appendChild(ogDescription);
	}, []);

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const footerRef = useRef(null);

	useEffect(() => {
		if (!titleRef.current || !descriptionRef.current || !footerRef.current)
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

		gsap.from(footerRef.current.children, {
			delay: 3,
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.25,
		});
	}, [titleRef, descriptionRef, footerRef]);

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
				<a className="specific-page-link" href="/" ref={footerRef}>
					<span>Home</span>
					<Arrow alt="arrow" />
				</a>
			</div>
		</>
	);
}
