import "../Css/Work.css";
import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Github } from "../Assets/SVG/github.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { useEffect, useState } from "react";
import { getWork } from "../Database/Firebase";

export default function Work() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    document.title = "W O R K - Web Developer | Showcasing My Work";
    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "View examples of my effortful and exciting works online. Learn about the tecs used and check out my GitHub repositories.");
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", "web development, projects, examples, tecs, GitHub, portfolio");
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
    ogUrl.setAttribute("content", "https://www.pratham-chudasama.co/");
    document.head.appendChild(ogUrl);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.setAttribute("content", "https://www.pratham-chudasama.co/favicon.png");
    document.head.appendChild(ogImage);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", "View examples of my effortful and exciting works online. Learn about the tecs used and check out my GitHub repositories.");
    document.head.appendChild(ogDescription);
    (async () => {
      setProjects(await getWork());
    })();
  }, []);

  return (
    <>
      <div id="Work">
        <h1 className="title-name stop-title">Work</h1>
        <h2 className="description">
          <p>
            This are some of my effortful and exciting works online right now.
            Check it out!
          </p>
          <p>
            In this growing and changing world, learning and gaining new skills
            are important and my aims are growing with it.
          </p>
        </h2>
        <div className="projects">
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
                <a className="project-title loading">
                  Loading Project Title...
                </a>
                <a className="project-tecs loading">Loading Tecs used...</a>
              </div>
            </>
          )}
        </div>
        <a className="specific-page-link" href="/about">
          <span>about</span>
          <Arrow alt="arrow"/>
        </a>
      </div>
    </>
  );
}
