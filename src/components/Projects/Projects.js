import "./Projects.css";
import { NavBar } from "../NavBar/NavBar";
import { Project } from "../Project/Project";

export const Projects = () => {
  return (
    <div className="projects">
      <NavBar />
      <div className="project-container">
        <a
          href="https://garden-grow-fe.vercel.app/"
          target="_blank"
          className="first-project"
        >
          <Project name="Garden Grow" img="/assets/garden-grow.png" />
        </a>
        <a
          href="https://lav-link-smithkirsten.vercel.app/"
          target="_blank"
          className="second-project"
        >
          <Project name="Lav Link" img="/assets/lav-link.png" />
        </a>
        <a
          href="https://ghibli-stream.vercel.app/"
          target="_blank"
          className="third-project"
        >
          <Project name="Ghibli Stream" img="/assets/ghibli-stream.png" />
        </a>
      </div>
    </div>
  );
};
