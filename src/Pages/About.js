import { useEffect } from "react";

import "../Css/About.css";

import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";

import { useAboutMedia } from "../Database/Database";

export default function About() {
  const image = useAboutMedia();

  useEffect(() => {
    document.title = "A B O U T";
  }, []);

  return (
    <>
      <div id="About">
        <div className="title-name">About</div>
        <div className="description">
          <p className="bold-description">
            I’m PRATHAM.
            <br />A Webdevloper and A Student
          </p>
          <p>
            I've been programming since my parents bought me a laptop. Online
            designs, web apps, fascinating projects, and graphics have always
            motivated me towards webdevelopment. Working with computers, the
            internet, programmes, websites, and the intricate technology that
            surrounds them has always piqued my interest. I've never been afraid
            to take a risk and try something new!
          </p>
          <p>
            I am currently studying at LJIET in ICT branch, but with studies I
            am building up my skills every single day!
          </p>
          <p>
            Right now I am looking for startups or company internship for
            contributing my work and gaining experience.
          </p>
          <div>
            <p>One of my favourite quotes by Steve Jobs :</p>
            <p className="bold-description">
              “The only way to do great work is to love what you do”
            </p>
          </div>
          <p>This inspires me to do work with all hearts and keep on going.</p>
        </div>
        {image ? (
          <img
            loading="lazy"
            className="about-image"
            title={image.description}
            src={image.src}
            alt={image.description}
          />
        ) : (
          <div className="about-image loading" />
        )}
      </div>

      <div id="Skill">
        <div className="title-name">Skills</div>
        <div className="description">
          <div className="bold-description">
            HTML and CSS · Javascript · React · Firebase · Nodejs · Python ·
            Illustrations · UI/UX Designs · Graphic Designs ...
          </div>
          <a
            className="resume"
            href="https://drive.google.com/file/d/1Q6srS9hRvFzKY1vp1dpNpoBbd5QlWZmq/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <Link />
          </a>
        </div>
        <a className="specific-page-link" href="/contact">
          <span>contact</span>
          <Arrow />
        </a>
      </div>
    </>
  );
}
