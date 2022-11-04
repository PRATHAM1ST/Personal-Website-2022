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
