import { useEffect, useRef, useState } from "react";

import "../Css/Work.css";

import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Github } from "../Assets/SVG/github.svg";

import { getWork } from "../Database/Firebase";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterNav from "../Components/FooterNav";
import Metadata from "../Components/Metadata";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [projects, setProjects] = useState(null);

  Metadata({
    title: "W O R K - Web Developer | Showcasing My Work",
    description: "View examples of my effortful and exciting works online. Learn about the tecs used and check out my GitHub repositories.",
    keywords: "web development, projects, examples, tecs, GitHub, portfolio",
  });

  useEffect(() => {
    (async () => {
      setProjects(await getWork());
    })();
  }, []);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    if (!descriptionRef.current) return;
    if (!projectsRef.current) return;
    
    gsap.from(titleRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(descriptionRef.current, {
      duration: 1,
      delay: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });

    gsap.from(projectsRef.current, {
      duration: 1,
      delay: 2,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out",
    });

  }, [titleRef, descriptionRef, projectsRef]);
  
  useEffect(() => {
    if (!projects) return;

    gsap.from(projectsRef.current.children, {
      delay: 2,
      x: -100,
      duration: 1,
      ease: "power3.out",
      opacity: 0,
      y: 50,
      stagger: 0.2,
      // scrollTrigger: {
      //   trigger: projectsRef.current.children,
      //   // start: "bottom 95%",
      //   // end: "center top",
      //   // markers: true,
      //   scrub: 1,
      // },
    });

  }, [projects]);

  return (
    <>
      <div id="Work">
        <h1 className="title-name stop-title" ref={titleRef}>Work</h1>
        <h2 className="description" ref={descriptionRef}>
          <p>
            This are some of my effortful and exciting works online right now.
            Check it out!
          </p>
          <p>
            In this growing and changing world, learning and gaining new skills
            are important and my aims are growing with it.
          </p>
        </h2>
        <div className="projects" ref={projectsRef}>
          {projects ? (
            projects.map((project) => {
              return (
                <div className="project" key={project.id} id={project.id}>
                  <a
                    href={project.website}
                    className="project-title"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                    <Link alt="project link"/>
                  </a>
                  <a
                    href={project.github}
                    className="project-tecs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.tecs.map(
                      (tec, index) =>
                        tec + (index !== project.tecs.length - 1 ? " · " : "")
                    )}
                    {project.github ? <Github alt="github"/> : ""}
                  </a>
                  <img
                    loading="lazy"
                    title={project.title}
                    className="project-snapshot"
                    src={project.snapshot}
                    alt={project.title}
                  />
                </div>
              );
            })
          ) : (
            <>
              <div className="project">
                <a className="project-title loading" href="#ff">
                  Loading Project Title...
                </a>
                <a className="project-tecs loading" href="#ff">Loading Tecs used...</a>
              </div>
            </>
          )}
        </div>
        <FooterNav title={"About"} link={"/about"} />
      </div>
    </>
  );
}
