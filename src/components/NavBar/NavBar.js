import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/projects'} >Projects</NavLink>
      <NavLink to={'/'} >About</NavLink>
      <NavLink to={'/'} >Contact</NavLink>
    </nav>
  )
}