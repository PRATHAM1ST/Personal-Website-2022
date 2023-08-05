import { useRef, useEffect, useState } from "react";

import "../Css/Home.css";

import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { useHomeMedia } from "../Database/Database";
import { gsap } from "gsap";

export default function Home() {
	const videoRef = useRef();
	const [videos, images] = useHomeMedia();
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [dataLoaded, setDataLoaded] = useState({
		heroRight: false,
		heroMiddle: false,
		heroLeft: false,
		alreadyLoaded: false,
	});
	const setPlayBack = () => {
		videoRef.current.addEventListener("ended", () => {
			setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
		});
	};

	useEffect(() => {
		document.title = "P R A T H A M - Web Developer | Showcasing My Work";

		const metaDescription = document.createElement("meta");
		metaDescription.setAttribute("name", "description");
		metaDescription.setAttribute(
			"content",
			"Welcome to my personal website! I'm Pratham, a passionate web developer dedicated to delivering top-notch websites and web applications. Explore my portfolio and discover my work in front-end and back-end development, responsive design, and more."
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
		ogTitle.setAttribute(
			"content",
			"Pratham - Web Developer | Showcasing My Work"
		);
		document.head.appendChild(ogTitle);

		const ogUrl = document.createElement("meta");
		ogUrl.setAttribute("property", "og:url");
		ogUrl.setAttribute("content", "https://www.pratham-chudasama.co/");
		document.head.appendChild(ogUrl);

		const ogDescription = document.createElement("meta");
		ogDescription.setAttribute("property", "og:description");
		ogDescription.setAttribute(
			"content",
			"Welcome to my personal website! I'm Pratham, a passionate web developer dedicated to delivering top-notch websites and web applications. Explore my portfolio and discover my work in front-end and back-end development, responsive design, and more."
		);
		document.head.appendChild(ogDescription);

		document.body.style.overflow = "hidden";
		document.body.style.height = "calc(100vh - var(--margin))";
	}, []);

	const titleNameRef = useRef();
	const descriptionRef = useRef();
	const assetsRef = useRef();
	const footerRef = useRef();

	useEffect(() => {
		if (!titleNameRef) return;
		gsap.from(titleNameRef.current, {
			position: "sticky",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			// width: "auto",
			scale: 100,
			duration: 2,
			whiteSpace: "wrap",
			ease: "power4.out",
			gridColumn: "1",
			display: "flex",
			flexWrap: "wrap",
			gap: "1rem",
			opacity: 0,
			animation: "none",
			textShadow: "0em 0em var(--quaternary-clr)",
		}).then(() => {
			gsap.to(titleNameRef.current, {
				delay: 1,
				fontSize: "var(--fs-hero-title)",
				position: "relative",
				display: "flex",
				gap: "1rem",
				gridColumn: "1 / -1",
				width: "auto",
				whiteSpace: "nowrap",
				ease: "power4.out",
				textShadow: "-0.1em 0.1em var(--quaternary-clr)",
				opacity: 1,
				animation: "animate-name 10s ease-in-out infinite",
			});
		});

		gsap.from(descriptionRef.current, {
			y: 100,
			delay: 4,
			duration: 1,
			opacity: 0,
			ease: "power4.out",
			overflow: "hidden",
		}).then(() =>
			gsap.to(descriptionRef.current, {
				y: 0,
				opacity: 1,
			})
		);

		gsap.from(footerRef.current.children, {
			delay: 3,
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.25,
		});
	}, [titleNameRef]);

	useEffect(() => {
		if (
			!dataLoaded.heroLeft &&
			!dataLoaded.heroMiddle &&
			!dataLoaded.heroRight
		)
			return;
		if (dataLoaded.alreadyLoaded) return;
		setDataLoaded({ ...dataLoaded, alreadyLoaded: true });
		gsap.from(assetsRef.current.children, {
			height: 0,
			delay: 1,
			duration: 1,
			opacity: 0,
			ease: "power4.out",
			overflow: "hidden",
		}).then(() => {
			gsap.to(assetsRef.current.children, {
				opacity: 1,
			});

			gsap.fromTo(".hero-start", {
				translate: "0, 0",
				objectPosition: "50% 70%"
			},{
				translate: "0, 5%",
				objectPosition: "50% 100%",
			}).repeat(-1).yoyo(true).duration(10).ease("linear");

			gsap.fromTo(".hero-middle", {
				scale: 1,
				objectPosition: "0% 70%"
			},{
				scale: 1.1, 
				objectPosition: "70%",
			}).repeat(-1).yoyo(true).duration(1).ease("linear");

			gsap.fromTo(".hero-end", {
				translate: "0, 0",
				objectPosition: "50% 70%"
			},{
				translate: "-2.5%, 0%",
				objectPosition: "50% 80%",
			}).repeat(-1).yoyo(true).duration(10).ease("linear");
		});
	}, [dataLoaded]);

	return (
		<>
			<div id="Home">
				<h1 className="title-name" ref={titleNameRef}>
					Pratham Chudasama
				</h1>
				<div className="description" ref={descriptionRef}>
					Learning and creating engaging web-dev projects.
				</div>
				<div className="assets" ref={assetsRef}>
					{images ? (
						<img
							className="hero-start"
							alt={images[0].description}
							src={images[0].src}
							title={images[0].description}
							loading="lazy"
							onLoad={() =>
								setDataLoaded({ ...dataLoaded, heroLeft: true })
							}
						/>
					) : (
						<></>
					)}
					{videos ? (
						<video
							loading="lazy"
							className="hero-middle"
							alt="eating pizza"
							src={videos[currentVideoIndex]}
							ref={videoRef}
							onCanPlay={setPlayBack}
							autoPlay
							// loop
							muted
							onLoad={() =>
								setDataLoaded({
									...dataLoaded,
									heroMiddle: true,
								})
							}
						/>
					) : (
						<></>
					)}
					{images ? (
						<img
							loading="lazy"
							className="hero-end"
							alt={images[1].description}
							src={images[1].src}
							title={images[1].description}
							onLoad={() =>
								setDataLoaded({
									...dataLoaded,
									heroRight: true,
								})
							}
						/>
					) : (
						<></>
					)}
				</div>
				<a className="specific-page-link" href="/work" ref={footerRef}>
					<span>work</span>
					<Arrow />
				</a>
			</div>
		</>
	);
}
