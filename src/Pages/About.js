import { useEffect, useRef, useState } from "react";

import "../Css/About.css";

import { ReactComponent as Link } from "../Assets/SVG/link.svg";

import { useAboutMedia } from "../Database/Database";
import { gsap } from "gsap";
import FooterNav from "../Components/FooterNav";
import Metadata from "../Components/metadata.js";

export default function About() {
	const image = useAboutMedia();

	Metadata({
		title: "A B O U T - Web Developer | Showcasing My Work",
		description: "Meet PRATHAM, a talented web developer and student studying ICT at LJIET. Learn about his passion for programming, his skills in HTML, CSS, JavaScript, React, Firebase, Node.js, and more, and how he's looking for an internship to gain experience. View his resume and contact him to work together on your next project.",
		keywords: "web development, programming, personal website",
	});

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const imageRef = useRef(null);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
		if (!titleRef.current) return;
		if (!descriptionRef.current) return;

		gsap.from(titleRef.current, {
			duration: 1,
			opacity: 0,
			y: -100,
		});

		gsap.from(descriptionRef.current.children, {
			delay: 1,
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.25,
		});
		
	}, [titleRef, descriptionRef]);
	
	useEffect(() => {
		if (!imageRef.current) return;
		if (!isImageLoaded) return;
		
		gsap.from(imageRef.current, {
			duration: 1,
			opacity: 0,
			delay: 2,
			x: 200,
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
						style={{ opacity: isImageLoaded ? 1 : 0 }}
					/>
				) : (
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
				<FooterNav title={"Contact"} link={"/contact"} />
			</div>
		</>
	);
}
