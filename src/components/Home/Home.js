import "./Home.css";
import { NavBar } from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="top-half">
        <div className="intro-container">
          <div className="image-container">
            <img className="image" alt="Rae Gebharts's portrait" src="/assets/square-profile.jpg" />
            <h1>Rae Gebhart</h1>
          </div>
        </div>
        <div className="title-container">
          <div className="title-border-container">
            <h2 className="professional-title">~ Professional Title ~</h2>
            <h2 className="software-developer">Software Developer</h2>
          </div>
        </div>
        <div className="career-summary-container">
          <div className="career-border-container">
            <h2>Career Summary</h2>
            <p>
              As a former restaurant industry professional with nine years of
              experience, I know how to work hard, manage high-stress
              environments, and deliver results in fast-paced settings. But I'm
              also a curious and ambitious individual who's always looking for
              new challenges and opportunities to learn and grow. That's why I
              made the decision to pivot my career into software development.
              <br />
              <br />
              Today, I'm a front-end software developer with a passion for
              creating beautiful and intuitive user experiences. I have
              experience working with JavaScript, React, Redux, Unit testing and E2E testing, and I'm constantly expanding
              my skillset and exploring new technologies.
              <br />
              <br />
              My past experience in the restaurant industry has given me
              valuable skills that I've been able to apply to my work in
              software development. I'm a quick learner, a natural
              problem-solver, and I know how to work effectively as part of a
              team. But I'm also comfortable taking on individual responsibility
              and taking ownership of my work.
              <br />
              <br />
              If you're looking for a front-end developer who's ambitious,
              hard-working, and has experience managing high-stress
              environments, then I'm the candidate you've been searching for.
              Let's connect and discuss how I can bring my skills and expertise
              to your team.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <div className="skills-container">
          <div className="skills-border-container">
            <p></p>
            <p></p>
            <p></p>
            <h2>Skills</h2>
            <h3>Languages</h3>
            <p>JavaScript | HTML | CSS | SASS | SQL </p>
            <h3>Frameworks & Tools</h3>
            <p>
              React | React Router | Redux | GraphQL | RestAPI| E2E | Cypress |
              TDD | Mocha/Chai | ARIA | Accessibility Practices | Agile
              Methodologies | NPM | GitHub | Git | VScode | Wireframing | Figma
              | Postman | Node.js | Express
            </p>
          </div>
        </div>
        <div className="currently-working-on-container">
          <div className="currently-working-on-border-container">
            <h2>Currently Working On</h2>
            <p>~Learning how to build a database with MySQL~</p>
            <p>~Teaching myself Node.js and Express to build a server that will connect to that database~</p>
            <p>~Implementing a login page to a recipe tracking application~</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
