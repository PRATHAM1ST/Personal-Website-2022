import { useEffect, useRef, useState } from "react";

import "../Css/About.css";

import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";

import { useAboutMedia } from "../Database/Database";
import { gsap } from "gsap";

export default function About() {
	const image = useAboutMedia();

	useEffect(() => {
		document.title = "A B O U T - Web Developer | Showcasing My Work";

		const metaDescription = document.createElement("meta");
		metaDescription.setAttribute("name", "description");
		metaDescription.setAttribute(
			"content",
			"Meet PRATHAM, a talented web developer and student studying ICT at LJIET. Learn about his passion for programming, his skills in HTML, CSS, JavaScript, React, Firebase, Node.js, and more, and how he's looking for an internship to gain experience. View his resume and contact him to work together on your next project."
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
		ogTitle.setAttribute("content", "A B O U T");
		document.head.appendChild(ogTitle);

		const ogUrl = document.createElement("meta");
		ogUrl.setAttribute("property", "og:url");
		ogUrl.setAttribute("content", "https://www.pratham-chudasama.co/");
		document.head.appendChild(ogUrl);

		const ogDescription = document.createElement("meta");
		ogDescription.setAttribute("property", "og:description");
		ogDescription.setAttribute(
			"content",
			"Meet PRATHAM, a talented web developer and student studying ICT at LJIET. Learn about his passion for programming, his skills in HTML, CSS, JavaScript, React, Firebase, Node.js, and more, and how he's looking for an internship to gain experience. View his resume and contact him to work together on your next project."
		);
		document.head.appendChild(ogDescription);
	}, []);

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const imageRef = useRef(null);
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const footerRef = useRef(null);

	useEffect(() => {
		if (!titleRef.current) return;
		if (!descriptionRef.current) return;

		gsap.from(titleRef.current, {
			delay: 2,
			duration: 1,
			opacity: 0,
			y: -100,
			ease: "power3.out",
		});

		gsap.from(descriptionRef.current, {
			delay: 3,
			duration: 1,
			opacity: 0,
			y: 100,
			ease: "power3.out",
		});

		gsap.from(footerRef.current.children, {
			delay: 3,
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.25,
		});
		
	}, [titleRef, descriptionRef, footerRef]);
	
	useEffect(() => {
		if (!imageRef.current) return;
		if (!isImageLoaded) return;
		
		gsap.from(imageRef.current, {
			duration: 1,
			opacity: 0,
			delay: 2,
			x: 200,
			ease: "power3.out",
		});

	}, [imageRef, isImageLoaded]);



	return (
		<>
			<div id="About">
				<div className="title-name stop-title" ref={titleRef}>About</div>
				<div className="description" ref={descriptionRef}>
					<p className="bold-description">
						Hello, I'm PRATHAM - a Web Developer and Student.
					</p>
					<p>
						Ever since my parents gifted me a laptop, I've been
						passionate about programming. The endless possibilities
						of online designs, web apps, and graphics have always
						fascinated me and motivated me towards web development.
						I enjoy working with computers, the internet, programs,
						and the intricate technology that surrounds them. I
						believe that trying new things and taking risks is
						essential for personal and professional growth.
					</p>
					<p>
						Currently, I am pursuing my studies at LJIET in the ICT
						branch. Despite my academic commitments, I devote a
						significant amount of time to building my skills. Every
						day, I learn something new that contributes to my growth
						as a developer.
					</p>
					<p>
						I am actively seeking internship opportunities with
						startups or companies where I can contribute my skills
						and gain valuable experience. I am excited to work with
						like-minded individuals and contribute to meaningful
						projects that impact people's lives positively.
					</p>
					<div>
						<p>One of my favorite quotes by Steve Jobs is:</p>
						<p className="bold-description">
							“The only way to do great work is to love what you
							do”
						</p>
					</div>
					<p>
						These words inspire me to do my best work with passion,
						dedication, and determination. I believe that hard work
						and a love for what you do are the keys to success.
					</p>
				</div>
				{image ? (
					<img
						loading="lazy"
						className="about-image"
						title={image.description}
						src={image.src}
						alt={image.description}
						ref={imageRef}
						onLoad={() => setIsImageLoaded(true)}
					/>
				) : (
					// <div className="about-image loading" />
					<></>
				)}
			</div>

			<div id="Skill">
				<div className="title-name stop-title">Skills</div>
				<div className="description">
					<div className="bold-description">
						HTML and CSS · Javascript · React · Next · Firebase ·
						Nodejs · Python · Illustrations · UI/UX Designs ·
						Graphic Designs ...
					</div>
					<a
						className="resume"
						href={process.env.REACT_APP_RESUME_URL}
						target="_blank"
						rel="noreferrer"
					>
						Resume
						<Link />
					</a>
				</div>
				<a className="specific-page-link" href="/contact" ref={footerRef}>
					<span>contact</span>
					<Arrow alt="arrow" />
				</a>
			</div>
		</>
	);
}
