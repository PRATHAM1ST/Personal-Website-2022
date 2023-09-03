import { useEffect, useRef, useState } from "react";
import "../Css/Navbar.css";
import NavigationPanel from "./NavigationPanel";
import { gsap } from "gsap";

export default function Navbar() {
	const [openNavPanel, setOpenNavPanel] = useState(false);
	const circularTextContainer = useRef(null);
	const circularTextTimeline = useRef(null);
	const navPannelRef = useRef(null);

	const circularText = " Pratham's Portfolio Pratham's Portfolio ";
	let circularTextLetters = [];

	for (let i = 0; i < circularText.length; i++) {
		let element = {
			letter: circularText[i],
			angle: (i * 360) / circularText.length,
		};
		circularTextLetters.push(element);
	}

	const handleClick = () => {
		if (!openNavPanel) {
			setOpenNavPanel(true);
		} else {
			setOpenNavPanel(false);
		}
	};

	useEffect(() => {
		if (!circularTextContainer.current) return;
		circularTextTimeline.current = gsap.to(circularTextContainer.current, {
			rotate: 360,
			duration: 5,
			ease: "linear",
			repeat: -1,
		});
	}, [circularTextContainer]);

	const handleCircularTextHover = (enter) => {
		if (enter) {
			circularTextTimeline.current.duration(1).resume();
		} else {
			circularTextTimeline.current.duration(5).resume();
		}
	};

	useEffect(() => {
		if (!navPannelRef) return;
		gsap.from(navPannelRef.current, {
			delay: 2.5,
			opacity: 0,
			y: -100,
			duration: 1,
			ease: "power4.out",
		});
	}, [navPannelRef]);

	const handleScroll = () => {
		console.log('jendjnd');
		// Get the current scroll position
		const scrollY = window.scrollY;
		// Calculate the height of the page content
		const pageHeight =
			document.documentElement.scrollHeight - window.innerHeight;

		// Check if we are at the end of the page
		if (scrollY >= pageHeight) {
			// Highlight the menu div or take any other action you want
			navPannelRef.current.style.backgroundColor = "yellow";
		} else {
			// Reset the highlight
			navPannelRef.current.style.backgroundColor = "";
		}
	};

	useEffect(() => {
		if (!circularTextContainer.current) return;

		// Add scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [circularTextContainer]);

	return (
		<>
			<NavigationPanel openNavPanel={openNavPanel} />
			<nav id="Nav" ref={navPannelRef}>
				<a className="user-skills" href="/">
					<ol>
						<li
							style={{
								color: openNavPanel
									? "var(--quaternary-clr)"
									: "var(--seconadry-clr)",
							}}
						>
							Frontend
						</li>
						<li
							style={{
								color: openNavPanel
									? "var(--quaternary-clr)"
									: "var(--seconadry-clr)",
							}}
						>
							Designer
						</li>
						<li
							style={{
								color: openNavPanel
									? "var(--quaternary-clr)"
									: "var(--seconadry-clr)",
							}}
						>
							Student
						</li>
					</ol>
				</a>
				<div
					className="nav-link-opener"
					onMouseEnter={() => handleCircularTextHover(true)}
					onMouseLeave={() => handleCircularTextHover(false)}
				>
					<a
						className="center-link"
						style={{
							color: openNavPanel
								? "var(--quaternary-clr)"
								: "var(--seconadry-clr)",
							textDecoration: "none",
						}}
						href="#Menu"
						onClick={handleClick}
					>
						{openNavPanel ? "Close" : "Menu"}
					</a>
					<div className="circular-text" ref={circularTextContainer}>
						{circularTextLetters.map((element) => {
							return (
								<span
									key={element.angle}
									className="circular-text-letter"
									style={{
										transform: `rotate(${element.angle}deg)`,
									}}
								>
									{element.letter}
								</span>
							);
						})}
					</div>
				</div>
			</nav>
		</>
	);
}
