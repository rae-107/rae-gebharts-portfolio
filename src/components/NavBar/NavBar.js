import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </div>
  );
};
