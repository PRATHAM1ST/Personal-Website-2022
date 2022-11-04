import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { ReactComponent as Github } from "../Assets/SVG/github.svg";
import { ReactComponent as LinkedIn } from "../Assets/SVG/linkedin.svg";
import { ReactComponent as Instagram } from "../Assets/SVG/instagram.svg";
import { ReactComponent as Email } from "../Assets/SVG/email.svg";

import "../Css/Contact.css";
import { useEffect } from "react";

export default function Contact() {

  document.body.style.overflow = "hidden";

  useEffect(()=>{
    document.title = "C O N T A C T";
  }, [])

  return (
    <>
      <div id="Contact">
        <div className="title-name stop-title">Hello!!!</div>
        <div className="description">
          <div className="mail-address">
            <label htmlFor="email">Email</label>
            <a id="email" href="mailto:prathamchudasama142@gmail.com" target="_blank" rel="noreferrer">
              prathamchudasama142@gmail.com
              <Email />
            </a>
          </div>
          <div className="internet-links">
            <label>On The Internet</label>
            <a id="github" href="https://github.com/PRATHAM1ST" target="_blank" rel="noreferrer">
              Github
              <Github />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/pratham-chudasama-32309822a/" target="_blank" rel="noreferrer">
              LinkedIn
              <LinkedIn />
            </a>
            <a id="instagram" href="https://www.instagram.com/awesome_pratham/" target="_blank" rel="noreferrer">
              Instagram
              <Instagram />
            </a>
          </div>
          <div className="resume-link">
            <label htmlFor="resume">My Resume</label>
            <a
              id="resume"
              href="https://drive.google.com/file/d/1Q6srS9hRvFzKY1vp1dpNpoBbd5QlWZmq/view"
              target="_blank" rel="noreferrer"
            >
              Resume
              <Link />
            </a>
          </div>
        </div>
        <a className="specific-page-link" href="/">
          <span>Home</span>
          <Arrow />
        </a>
      </div>
    </>
  );
}
