import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";

export default function FooterNav({ title, link }) {
	const footerRef = useRef();

	useEffect(() => {
        if (!footerRef.current) return;

		gsap.from(footerRef.current.children, {
			delay: 3,
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.25,
		});
	}, [footerRef]);

	return (
		<>
			<a className="specific-page-link" href={link} ref={footerRef}>
				<span>{title}</span>
				<Arrow />
			</a>
		</>
	);
}
