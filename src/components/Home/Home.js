import './Home.css'
import { NavBar } from '../NavBar/NavBar'

const Home = () => {
  return (
    <div>
    <div className='home'>
      <div className='nav-container' >
        <div className='nav-style-box'></div>
        <NavBar />
        <img className='home-icon' src='/assets/home-stencil.png'/>
      </div>
      <div className='intro-container'>
        <div className='image-container' >
          <img className='image' src='/assets/square-profile.jpg' />
          <h1>Rae Gebhart</h1>
        </div>
      </div>
      <div className='title-container' >
        <div className='title-border-container' >
          <h2 className='professional-title' >~ Professional Title ~</h2>
          <h2 className='software-developer'>Software Developer</h2>
        </div>
      </div>
      <div className='career-summary-container'>
        <div className='career-border-container' >
          <h2>Career Summary</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home 