import "./Projects.css";
import { NavBar } from "../NavBar/NavBar";
import { Project } from "../Project/Project";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="nav-container">
        <div className="nav-style-box"></div>
        <NavBar />
        <img
          className="home-icon"
          alt="Home Button"
          src="/assets/home-stencil.png"
        />
      </div>
      <div className="project-container" >
        <div className="first-project">
          <Project name="Garden Grow" img="/assets/garden-grow.png" />
        </div>
        <div className="second-project">
          <Project name="Lav Link" img="/assets/lav-link.png" />
        </div>
        <div className="third-project">
          <Project name="Ghibli Stream" img="/assets/ghibli-stream.png" />
        </div>
      </div>
    </div>
  );
};
