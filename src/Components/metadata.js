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

			// og tags
			createMetaTag("og:title", title),
			createMetaTag("og:url", window.location.href),
			createMetaTag("og:description", description),
			createMetaTag("og:type", "personal website"),
			createMetaTag("og:image", "https://firebasestorage.googleapis.com/v0/b/personal-website-adcb1.appspot.com/o/Images%2Fpratham-chudasama-co.png?alt=media&token=bd85143b-de76-4a69-b64d-669efe8541e0"),
			createMetaTag("og:image:width", "1920"),
			createMetaTag("og:image:height", "1080"),

			// twitter tags
			createMetaTag("twitter:title", title),
			createMetaTag("twitter:description", description),
			createMetaTag("twitter:card", "summary_large_image"),
			createMetaTag("twitter:image", "https://firebasestorage.googleapis.com/v0/b/personal-website-adcb1.appspot.com/o/Images%2Fpratham-chudasama-co.png?alt=media&token=bd85143b-de76-4a69-b64d-669efe8541e0"),
			createMetaTag("twitter:image:width", "1920"),
			createMetaTag("twitter:image:height", "1080"),

			// favicon
			createMetaTag("icon", "https://firebasestorage.googleapis.com/v0/b/personal-website-adcb1.appspot.com/o/Images%2Fpratham-chudasama-co.png?alt=media&token=bd85143b-de76-4a69-b64d-669efe8541e0"),

			// mobile
			createMetaTag("mobile-web-app-capable", "yes"),
			createMetaTag("apple-mobile-web-app-capable", "yes"),
			createMetaTag("apple-mobile-web-app-status-bar-style", "black"),
			createMetaTag("apple-mobile-web-app-title", title),
			createMetaTag("msapplication-TileImage", "https://firebasestorage.googleapis.com/v0/b/personal-website-adcb1.appspot.com/o/Images%2Ffavicon.png?alt=media&token=8a6c5e1b-7f2f-4d4f-9d0b-1f9c5f9a8c2a"),
			createMetaTag("msapplication-TileColor", "#000000"),

			// theme
			createMetaTag("theme-color", "#000000"),

			// google
			createMetaTag("google-site-verification", "253sXFl_IBcYz7SnU9bPOMsiYz9cIZjk0AnTsC1CjiU"),
            createMetaTag("googlebot", "index, follow"),

			// robots
			createMetaTag("robots", "index, follow"),

			// viewport
			createMetaTag("viewport", "width=device-width, initial-scale=1.0"),
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
