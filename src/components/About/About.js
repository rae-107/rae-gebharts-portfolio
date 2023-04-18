import './About.css'
import { NavBar } from '../NavBar/NavBar'

export const About = () => {
  return (
    <div className='about-page'>
      <NavBar />
      <div className="top-half">
        <div className="intro-container">
          <div className="image-container">
            <img className="image" alt="Rae Gebharts's portrait" src="/assets/wetterhorn-shot.jpg" />
            <h1>Rae Gebhart</h1>
          </div>
        </div>
        <div className="title-container">
          <div className="title-border-container">
            <h2 className="hobbies-title">Hobbies</h2>
          </div>
        </div>
        <div className="career-summary-container">
          <div className="career-border-container">
            <h2>My Story</h2>
            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <div className="skills-container">
          <div className="skills-border-container">
            <h2>Certificate</h2>
          </div>
        </div>
        <div className="currently-working-on-container">
          <div className="currently-working-on-border-container">
            <h2>Professional Accomplishments</h2>
          </div>
        </div>
      </div>
    </div>
  )
}