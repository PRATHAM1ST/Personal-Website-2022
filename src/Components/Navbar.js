import { useEffect, useRef, useState } from "react";
import "../Css/Navbar.css";
import NavigationPanel from "./NavigationPanel";
import { gsap, TweenLite } from "gsap";

export default function Navbar() {
	const [openNavPanel, setOpenNavPanel] = useState(false);
	const [styleAnimation, setStyleAnimation] = useState("");
	const circularTextContainer = useRef(null);
	const circularTextTimeline = useRef(null);
	const navPannelRef = useRef(null);
	const [isCircularTextHovered, setIsCircularTextHovered] = useState(false);

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
			setStyleAnimation("nav-page-animate-entry 0.25s ease-in forwards");
			setOpenNavPanel(true);
		} else {
			setStyleAnimation("nav-page-animate-end 0.25s ease-out forwards");
			setTimeout(() => {
				setOpenNavPanel(false);
			}, 500);
		}
	};

	useEffect(() => {
		document.body.style.overflowY = openNavPanel ? "hidden" : "scroll";
	}, [openNavPanel]);

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
	return (
		<>
			{openNavPanel && <NavigationPanel style={styleAnimation} />}
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
