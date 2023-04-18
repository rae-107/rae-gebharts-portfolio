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
        <div className="hobbies-container">
          <div className="hobbies-border-container">
            <h2 className="hobbies-title">Hobbies</h2>
          </div>
        </div>
        <div className="my-summary-container">
          <div className="summary-border-container">
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
        <div className="certificate-container">
          <div className="certificate-border-container">
            <h2>Certificate</h2>
          </div>
        </div>
        <div className="accomplishments-container">
          <div className="accomplishments-container">
            <h2>Professional Accomplishments</h2>
          </div>
        </div>
      </div>
    </div>
  )
}