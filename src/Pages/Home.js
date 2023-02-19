import { useRef, useEffect, useState } from "react";

import "../Css/Home.css";

import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { useHomeMedia } from "../Database/Database";

export default function Home() {
  const videoRef = useRef();
  const [videos, images] = useHomeMedia();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const setPlayBack = () => {
    videoRef.current.addEventListener("ended", () => {
      setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    });
  };

  useEffect(() => {
    document.title = "P R A T H A M";
    
    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "This is my personal website where I showcase my work and share my experiences as a web developer.");
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", "web development, programming, personal website");
    document.head.appendChild(metaKeywords);

    const metaAuthor = document.createElement("meta");
    metaAuthor.setAttribute("name", "author");
    metaAuthor.setAttribute("content", "Pratham Chudasama");
    document.head.appendChild(metaAuthor);

    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", "P R A T H A M - Personal Website");
    document.head.appendChild(ogTitle);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.setAttribute("content", "https://www.pratham-chudasama.co/");
    document.head.appendChild(ogUrl);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.setAttribute("content", "https://www.pratham-chudasama.co/image.png");
    document.head.appendChild(ogImage);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", "This is my personal website where I showcase my work and share my experiences as a web developer.");
    document.head.appendChild(ogDescription);

    document.body.style.overflow = "hidden";
    document.body.style.height = "calc(100vh - var(--margin))";
  });

  return (
    <>
      <div id="Home">
        <div className="title-name">Pratham&nbsp;Chudasama</div>
        <div className="description">
          Learning and creating engaging web-dev projects.
        </div>
        <div className="assets">
          {images ? (
            <img
              className="hero-start"
              alt={images[0].description}
              src={images[0].src}
              title={images[0].description}
              loading="lazy"
            />
          ) : (
            <div className="hero-start loading" />
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
            />
          ) : (
            <div className="hero-middle loading" />
          )}
          {images ? (
            <img
              loading="lazy"
              className="hero-end"
              alt={images[1].description}
              src={images[1].src}
              title={images[1].description}
            />
          ) : (
            <div className="hero-end loading" />
          )}
        </div>
        <a className="specific-page-link" href="/work">
          <span>work</span>
          <Arrow />
        </a>
      </div>
    </>
  );
}
