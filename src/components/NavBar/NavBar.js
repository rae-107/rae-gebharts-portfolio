import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav>
      <NavLink >Projects</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </nav>
  )
}