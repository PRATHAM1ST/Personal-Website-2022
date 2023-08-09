import "../Css/NavigationPanel.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NavigationPanel({ openNavPanel }) {
	const pages = ["", "work", "about", "contact"];
	const linksRef = useRef(null);
	const pannelReference = useRef(null);

	useEffect(() => {
		if (!pannelReference.current) return;
		if (!linksRef.current) return;

		if (openNavPanel) {
			gsap.to(pannelReference.current, {
				duration: 1,
				x: 0,
				ease: "power1.in",
			}).then(() => {
				gsap.to(linksRef.current.children, {
					duration: 1,
					opacity: 1,
					x: 0,
					y: 0,
					stagger: 0.25,
				});
			});
		} else {
			gsap.to(linksRef.current.children, {
				duration: 1,
				opacity: 0,
				x: 100,
				y: 100,
				stagger: 0.25,
			}).then(() => {
				gsap.to(pannelReference.current, {
					duration: 1,
					x: "100vw",
					ease: "power1.out",
				});
			});
		}
	}, [openNavPanel, pannelReference]);

	return (
		<div
			id="NavigationPanel"
			ref={pannelReference}
		>
			<nav className="links" ref={linksRef}>
				{pages.map((page) => {
					if (page !== window.location.pathname.substring(1)) {
						if (page === "") {
							return (
								<a
									href="/"
									key={page}
									className="pageLink"
									onClick={() => console.log(1)}
								>
									home
								</a>
							);
						}
						return (
							<a href={page} key={page} className="pageLink">
								{page}
							</a>
						);
					}
					return "";
				})}
			</nav>
		</div>
	);
}
