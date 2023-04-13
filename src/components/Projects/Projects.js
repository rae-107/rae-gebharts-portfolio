import './Projects.css'
import { NavBar } from '../NavBar/NavBar'

export const Projects = () => {
  return (
    <div className='projects' >
      <div className="nav-container">
        <div className="nav-style-box"></div>
        <NavBar />
        <img className="home-icon" alt="Home Button" src="/assets/home-stencil.png" />
      </div>
    </div>
  )
}