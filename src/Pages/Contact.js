import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { ReactComponent as Github }  from "../Assets/SVG/github.svg";
import { ReactComponent as LinkedIn }  from "../Assets/SVG/linkedin.svg";
import { ReactComponent as Instagram }  from "../Assets/SVG/instagram.svg";
import { ReactComponent as Twitter }  from "../Assets/SVG/twitter.svg";
import { ReactComponent as Hackster }  from "../Assets/SVG/hackster.svg";
import { ReactComponent as Email }  from "../Assets/SVG/email.svg";

import "../Css/Contact.css";
import { useEffect } from "react";

export default function Contact() {

  document.body.style.overflow = "hidden";

  useEffect(()=>{
    document.title = "C O N T A C T - Web Developer | Showcasing My Work";

    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "Contact Pratham Chudasama, a web developer and programmer, via email or social media. View his resume and explore his work on Github and Hackster.");
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
    ogTitle.setAttribute("content", "C O N T A C T");
    document.head.appendChild(ogTitle);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.setAttribute("content", "https://www.pratham-chudasama.co/contact");
    document.head.appendChild(ogUrl);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", "Contact Pratham Chudasama, a web developer and programmer, via email or social media. View his resume and explore his work on Github and Hackster.");
    document.head.appendChild(ogDescription);
  }, [])

  return (
    <>
      <div id="Contact">
        <h1 className="title-name stop-title">Hello!!!</h1>
        <div className="description">
          <div className="mail-address">
            <label htmlFor="email">Email</label>
            <a id="email" href="mailto:chudasamapratham142@gmail.com" target="_blank" rel="noreferrer">
              chudasamapratham142@gmail.com
              <Email alt="email"/>
            </a>
          </div>
          <div className="internet-links">
            <label>On The Internet</label>
            <a id="github" href="https://github.com/PRATHAM1ST" target="_blank" rel="noreferrer">
              Github
              <Github alt="github"/>
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/pratham-chudasama-32309822a/" target="_blank" rel="noreferrer">
              LinkedIn
              <LinkedIn alt="linkedin"/>
            </a>
            <a id="instagram" href="https://www.instagram.com/awesome_pratham/" target="_blank" rel="noreferrer">
              Instagram
              <Instagram alt="instagram"/>
            </a>
            <a id="twitter" href="https://www.twitter.com/Pratham1st2002/" target="_blank" rel="noreferrer">
              Twitter
              <Twitter alt="twitter"/>
            </a>
            <a id="hackster" href="https://www.hackster.io/pratham1st" target="_blank" rel="noreferrer">
              Hackster
              <Hackster alt="hackster"/>
            </a>
          </div>
          <div className="resume-link">
            <label htmlFor="resume">My Resume</label>
            <a
              id="resume"
              href="https://drive.google.com/file/d/13W_CPPzy5zP4fTvZGMBrpqBo0282kdqw/view?usp=share_link"
              target="_blank" rel="noreferrer"
            >
              Resume
              <Link alt="link"/>
            </a>
          </div>
        </div>
        <a className="specific-page-link" href="/">
          <span>Home</span>
          <Arrow alt="arrow" />
        </a>
      </div>
    </>
  );
}
