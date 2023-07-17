import { useEffect, useState } from "react";
import "../Css/Navbar.css";
import NavigationPanel from "./NavigationPanel";

export default function Navbar() {
  const [openNavPanel, setOpenNavPanel] = useState(false);
  const [styleAnimation, setStyleAnimation] = useState("");

  const circularText = " Pratham's Portfolio Pratham's Portfolio ";
  let circularTextLetters = [];

  for (let i = 0; i < circularText.length; i++) {
    let element = {
      letter: circularText[i],
      angle: (i * 360) / circularText.length,
    };
    circularTextLetters.push(element);
  }

  const handleClick = () =>{
    if (!openNavPanel) {
      setStyleAnimation("nav-page-animate-entry 0.25s ease-in forwards");
      setOpenNavPanel(true)
    } else {
      setStyleAnimation("nav-page-animate-end 0.25s ease-out forwards");
      setTimeout(()=>{
        setOpenNavPanel(false)
      }, 500);
    }
  }

  useEffect(() => {
    document.body.style.overflowY = openNavPanel ? "hidden" : "scroll";
  }, [openNavPanel]);

  return (
    <>
      {openNavPanel && <NavigationPanel style={styleAnimation} />}
      <a href="/" id="Nav">
        <div className="user-skills">
          <ol>
            <li
              style={{
                color: openNavPanel
                  ? "var(--quaternary-clr)"
                  : "var(--seconadry-clr)",
              }}
            >
              Frontend
            </li>
            <li
              style={{
                color: openNavPanel
                  ? "var(--quaternary-clr)"
                  : "var(--seconadry-clr)",
              }}
            >
              Designer
            </li>
            <li
              style={{
                color: openNavPanel
                  ? "var(--quaternary-clr)"
                  : "var(--seconadry-clr)",
              }}
            >
              Student
            </li>
          </ol>
        </div>
        <div className="nav-link-opener">
          <a
            tabIndex={1}
            className="center-link"
            style={{
              color: openNavPanel
                ? "var(--quaternary-clr)"
                : "var(--seconadry-clr)",
            }}
            onClick={handleClick}
          >
            {openNavPanel ? "Close" : "Menu"}
          </a>
          <div className="circular-text">
            {circularTextLetters.map((element) => {
              return (
                <span
                  key={element.angle}
                  className="circular-text-letter"
                  style={{ transform: `rotate(${element.angle}deg)` }}
                >
                  {element.letter}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </>
  );
}
