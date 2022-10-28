import { useRef, useEffect, useState } from "react";

import "../Css/Home.css";

import smilingDown from "../Assets/Images/smiling-down.jpg";
import eatingPizza from "../Assets/Videos/eating-pizza.mp4";
import bowling from "../Assets/Videos/bowling.mp4";
import showingFlower from "../Assets/Videos/showing-flower.mp4";
import smilingRight from "../Assets/Images/smiling-right.jpg";

import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";

const videos = [eatingPizza, bowling, showingFlower];

export default function Home() {
  const videoRef = useRef();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const setPlayBack = () => {
    videoRef.current.addEventListener("ended", () => {
      setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    });
  };

  useEffect(() => {
    document.title = "P R A T H A M";
    document.body.style.overflow = "hidden";
  });

  return (
    <>
      <div id="Home">
        <div className="title-name">Pratham&nbsp;Chudasama</div>
        <div className="description">
          Learning and creating engaging web-dev projects.
        </div>
        <div className="assets">
          <img
            className="hero-start"
            alt="smiling down at ground while posing"
            src={smilingDown}
          />
          <video
            className="hero-middle"
            alt="eating pizza"
            src={videos[currentVideoIndex]}
            ref={videoRef}
            onCanPlay={setPlayBack}
            autoPlay
            // loop
            muted
          />
          <img className="hero-end" alt="smiling at right" src={smilingRight} />
        </div>
        <a className="specific-page-link" href="/work">
          <span>work</span>
          <Arrow />
        </a>
      </div>
    </>
  );
}
