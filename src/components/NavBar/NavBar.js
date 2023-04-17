import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-style-box"></div>
      <nav>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Link to='/'>
      <img
        className="home-icon"
        alt="Home Button"
        src="/assets/home-stencil.png"
      />
      </Link>
    </div>
  );
};
