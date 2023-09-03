import { useEffect } from "react";

export default function Metadata({
	title,
	description,
	keywords,
	overflowHidden = false,
}) {
	const createMetaTag = (name, content) => {
		const metaTag = document.createElement("meta");
		metaTag.setAttribute("name", name);
		metaTag.setAttribute("content", content);
		return metaTag;
	};

	useEffect(() => {

		// remove all meta tags
		document.querySelectorAll("meta").forEach((metaTag) => {
			metaTag.remove();
		});

		document.title = title;

		const metaTags = [
			createMetaTag("description", description),
			createMetaTag("keywords", keywords),
			createMetaTag("author", "Pratham Chudasama"),
			createMetaTag("og:title", title),
			createMetaTag("og:url", window.location.href),
			createMetaTag("og:description", description),
		];

		metaTags.forEach((metaTag) => {
			document.head.appendChild(metaTag);
		});

		if (overflowHidden) {
			document.body.style.overflow = "hidden";
			document.body.style.height = "calc(100vh - var(--margin))";
		}
	}, [title, overflowHidden, description, keywords]);

	return true;
}
