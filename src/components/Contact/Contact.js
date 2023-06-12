import "./Contact.css";
import { NavBar } from "../NavBar/NavBar";

export const Contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-container">
        <div className="contact">
          <h2 className="contact-information">Contact Information</h2>
          <div className="socials-container">
            <a href="https://www.linkedin.com/in/rae-gebhart/" target="_blank">
              <img
                className="linked-in"
                src="/assets/linkedIn.png"
                alt="Rae Gebhart's LinkedIn Profile"
              />
            </a>
            <a href="https://github.com/rae-107" target="_blank">
              <img
                className="github"
                src="/assets/github.png"
                alt="Rae Gebhart's GitHub account"
              />
            </a>
            <a href="https://docs.google.com/document/d/11ixPuvhXy8zjQoEgTRbY22L6p-_kk25RHeiuX0fHpQk/edit" target="_blank">
              <img
                className="resume"
                src="/assets/resume.png"
                alt="Rae Gebhart's Resume"
              />
            </a>
            <a href="mailto: raegebhart@gmail.com" target="_blank">
              <img
                className="gmail"
                src="/assets/gmail.png"
                alt="Rae Gebhart's Email"
              />
            </a>
          </div>
        </div>
        <h2 className="references">References</h2>
        <div className="references-container">
          <div className="reference">
            <p>
              <strong>Tristin Sorrells</strong>
              <br />
              <br />
              I strongly recommend Rae for any software engineering role. Her
              friendly and approachable demeanor made her a pleasure to work
              with and an exceptional team player. Rae's ability to quickly
              grasp new technologies and apply them to our project was
              impressive and a reflection of her overall strength as a software
              engineer. Her technical expertise and dedication to her work were
              invaluable to the success of our project. I would welcome the
              opportunity to work with Rae again, and I am confident that she
              would be an asset to any team.
              <br />
              <br />
              April 19th, 2023
            </p>
          </div>
          <div className="reference">
            <p>
              <strong>Rick Vermil</strong>
              <br />
              <br />
              I only had the chance to work with Rae on one project, but it was
              an excellent experience. We were learning a new technology during
              the build and thanks to Rae's problem-solving abilities,
              team-first mindset and communication skills, we were able to
              exceed all of our MVP goals. I'd love to work with Rae again in
              the future!
              <br />
              <br />
              April 12th, 2023
            </p>
          </div>
          <div className="reference">
            <p>
              <strong>Karim Al-Rashdan</strong>
              <br />
              <br />
              I had the pleasure of working with Rae and can confidently say
              that she is an exceptional software developer. Her technical
              expertise and problem-solving skills are truly impressive. During
              our group project, she consistently delivered high-quality work
              and demonstrated a deep understanding of software development
              principles and best practices.
              <br />
              <br />
              What sets Rae apart, however, is her ability to work
              collaboratively and communicate effectively with her team members.
              She is a great team player, always willing to go above and beyond
              to ensure project success. She helped me troubleshoot some of my
              tickets, and I am grateful for her support.
              <br />
              <br />
              Overall, I would highly recommend Rae to anyone seeking a talented
              and dedicated software developer. She would be a valuable asset to
              any team
              <br />
              <br />
              April 9th, 2023
            </p>
          </div>
          <div className="reference">
            <p>
              <strong>Kirsten Smith</strong>
              <br />
              <br />
              I was lucky enough to work with Rae on 2 back-to-back projects.
              Rae is a strong developer with a solid understanding of
              fundamentals and a curious, open-minded attitude that serves her
              (and her teammates) in tackling issues. I have witnessed both her
              using tools within her wheelhouse and learning new tools and
              concepts on the fly. In either case, she impressed me with her
              care and attention to detail while keeping her eye on the big
              picture.
              <br />
              <br />
              Beyond her technical skills, Rae is just a delight to work with!
              She is kind, funny, and compassionate and I thouroughly enjoyed
              collaborating with her. I highly recommend Rae for any team.
              <br />
              <br />
              March 3rd, 2023
            </p>
          </div>
          <div className="reference">
            <p>
              <strong>Patt Sookmark</strong>
              <br />
              <br />
              Having Rae in the group project was a blessing. Rae brought strong
              problem-solving skills to the team, especially when writing
              javascript methods and setting up TDD. She is very creative and it
              showed when she incorporated accessibility into CSS styling.
              <br />
              <br />
              As a team member, Rae is very thoughtful and ensures team members
              are caught on with the project and understand the choices that
              were made.
              <br />
              <br />
              February 4th, 2023
            </p>
          </div>
          <div className="reference">
            <p>
              <strong>Jordan Smith</strong>
              <br />
              <br />
              I would recommend Rae Gebhart for any software development
              opportunity. I had the pleasure of attending Turing School of
              Software and Design with Rae and can attest to her exceptional
              skills as a software developer.
              <br />
              <br />
              Rae is a talented and driven individual who consistently produces
              high-quality work. She is an expert in her field, with a deep
              understanding of software development concepts and the latest
              technologies. What sets Rae apart is her ability to ask insightful
              and thought-provoking questions related to coding. Her curiosity
              and eagerness to learn make her an invaluable asset to any team.
              In addition to her technical skills, Rae is a collaborative team
              player who is always willing to lend a hand and help others. She
              is also a creative problem-solver who is able to think outside the
              box to find innovative solutions to complex challenges.
              <br />
              <br />
              In conclusion, I highly recommend Rae Gebhart for any software
              development opportunity. She is an exceptional professional with a
              passion for coding and a commitment to excellence. I am confident
              that she would be an asset to any organization and would excel in
              any role.
              <br />
              <br />
              February 1st, 2023
            </p>
          </div>
        </div>
      </div>
      <a target="_blank" href="https://icons8.com/icon/447/linkedin">
        LinkedIn
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
      <br />
      <a target="_blank" href="https://icons8.com/icon/rUgzXdXFnhmg/gmail">
        Gmail
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
};
