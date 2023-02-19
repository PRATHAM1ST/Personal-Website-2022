import { useEffect } from "react";

import "../Css/About.css";

import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";

import { useAboutMedia } from "../Database/Database";

export default function About() {
  const image = useAboutMedia();

  useEffect(() => {
    document.title = "A B O U T";

    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "Meet PRATHAM, a talented web developer and student studying ICT at LJIET. Learn about his passion for programming, his skills in HTML, CSS, JavaScript, React, Firebase, Node.js, and more, and how he's looking for an internship to gain experience. View his resume and contact him to work together on your next project.");
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
    ogTitle.setAttribute("content", "A B O U T");
    document.head.appendChild(ogTitle);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.setAttribute("content", "https://www.pratham-chudasama.co/");
    document.head.appendChild(ogUrl);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", "Meet PRATHAM, a talented web developer and student studying ICT at LJIET. Learn about his passion for programming, his skills in HTML, CSS, JavaScript, React, Firebase, Node.js, and more, and how he's looking for an internship to gain experience. View his resume and contact him to work together on your next project.");
    document.head.appendChild(ogDescription);
  }, []);

  return (
    <>
      <div id="About">
        <div className="title-name stop-title">About</div>
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
        <div className="title-name stop-title">Skills</div>
        <div className="description">
          <div className="bold-description">
            HTML and CSS · Javascript · React · Next · Firebase · Nodejs · Python ·
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
          <Arrow alt="arrow"/>
        </a>
      </div>
    </>
  );
}
