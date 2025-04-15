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
            <p> I'm a front-end software developer with a background in the restaurant industry and a strong focus on building maintainable, intuitive user experiences. After nearly a decade managing fast-paced, high-stress environments, I transitioned into software development—drawn by the challenge of solving complex problems and the creativity of writing clean, thoughtful code.
              <br />
              <br />
              At Edelweiss, a B2B platform serving publishers and booksellers, I contributed to a large-scale migration from a legacy VB.NET/ASPX app to a modern React + TypeScript frontend. I collaborated cross-functionally to ensure feature parity, troubleshoot bugs, and build reusable UI components using Material UI. My communication skills—shaped by years in people-first roles—help me thrive in co-working sessions, cross-team debugging, and user-specific investigations.
              <br />
              <br />
              I'm constantly expanding my technical skillset, and I bring empathy, curiosity, and adaptability to every team I join. Whether I'm pair programming or picking up a new tool to unblock a project, I bring the same focus and drive I once brought to a Saturday night dinner rush.
              <br />
              <br />
              If you're looking for a thoughtful, team-oriented developer who communicates well and isn’t afraid to dive into tough problems—I’d love to connect.
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
            <p>~Learning cloud technologies~</p>
            <p>~Touching up on my UI skills~</p>
            <p>~Challenging my logic skills with coding problems~</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
