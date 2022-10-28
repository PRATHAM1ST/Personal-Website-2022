import "../Css/Work.css";
import { ReactComponent as Link } from "../Assets/SVG/link.svg";
import { ReactComponent as Github } from "../Assets/SVG/github.svg";
import { ReactComponent as Arrow } from "../Assets/SVG/arrow.svg";
import { useEffect, useState } from "react";
import { getWork } from "../Database/Firebase";

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = "W O R K";
    async function fetchingProjects() {
      setProjects(await getWork());
    }
    fetchingProjects();
  }, []);

  return (
    <>
      <div id="Work">
        <div className="title-name">Work</div>
        <div className="description">
          <p>
            This are some of my effortful and exciting works online right now.
            Check it out!
          </p>
          <p>
            In this growing and changing world, learning and gaining new skills
            are important and my aims are growing with it.
          </p>
        </div>
        <div className="projects">
          {projects.map((project) => {
            return (
              <div className="project" key={project.id}>
                <a href={project.website} className="project-title" target="_blank" rel="noreferrer">
                  {project.title}
                  <Link />
                </a>
                <a href={project.github} className="project-tecs" target="_blank" rel="noreferrer">
                  {project.tecs.map(
                    (tec, index) =>
                      tec + (index !== project.tecs.length - 1 ? " · " : "")
                  )}
                  {
                    project.github ? <Github /> : ""
                  }
                </a>
              </div>
            );
          })}
        </div>
        <a className="specific-page-link" href="/about">
          <span>about</span>
          <Arrow />
        </a>
      </div>
    </>
  );
}
