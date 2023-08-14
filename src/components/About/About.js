import "./About.css";
import { NavBar } from "../NavBar/NavBar";

export const About = () => {
  return (
    <div className="about-page">
      <NavBar />
      <div className="top-half">
        <div className="intro-container">
          <div className="image-container">
            <img
              className="image"
              alt="Rae Gebharts's portrait"
              src="/assets/wetterhorn-shot.jpg"
            />
            <h1>Rae Gebhart</h1>
          </div>
        </div>
        <div className="hobbies-container">
          <div className="hobbies-border-container">
            <h2 className="hobbies-title"> Hobbies </h2>
            <p align="center">
              <strong>Hiking!</strong> 🥾 I'm an avid hiker. I've hiked 27 out
              of the 54 fourteeners in CO. One of my goals is to say that I've
              hiked all of them.{" "}
            </p>
            <p align="center">
              <strong>Traveling!</strong> 🚐 I haven't left the country yet but
              the PNW and Alaska have been my favorite places to visit.{" "}
            </p>
            <p align="center">
              <strong>Video Games!</strong> 🎮 Some of my favorite games are:
              Legend of Zelda, Dark Souls and the Halo series.
            </p>
          </div>
        </div>
        <div className="my-summary-container">
          <div className="summary-border-container">
            <h2>My Story</h2>
            <p>
              I was born in Florida but grew up in the beautiful state of
              Colorado. As the youngest of seven kids, I had a unique childhood
              experience. My parents chose to homeschool all of us, which gave
              me the freedom to explore my interests and passions. I spent a lot
              of time outdoors, hiking, and discovering the natural beauty of
              Colorado. I also developed a love for cooking and video games,
              which are still some of my favorite hobbies today.
              <br />
              <br />
              When it was time for college, I decided to enroll in classes at
              just 16 years old. I wasn't sure what I wanted to do with my life.
              I ended up exploring different fields, but I didn't find my first
              passion until I started working in the restaurant industry. I
              spent nine years in various roles, learning about hard work,
              customer service, and teamwork. Eventually, I realized that I
              wanted to transition to a career in software development. I
              enrolled in the Turing School of Software & Design and earned a
              certificate of completion in Front-End Software Engineering. The
              journey wasn't easy, and throughout my academic journey, I faced
              challenges but my previous experiences taught me the importance of
              hard work, determination, and perseverance. I'm proud of how far
              I've come and excited to see where my new career takes me.
              <br />
              <br />
              My ultimate goal is to become a Software Engineer and create
              innovative solutions to real-world problems. I believe that
              technology can be used to make our lives easier and to solve some
              of the most pressing environmental challenges of our time. In my
              free time, I like to explore the great outdoors.
              <br />
              <br />
              Looking back on my life so far, I am grateful for the
              opportunities I have had and the experiences that have shaped me
              into the person I am today. I am excited to see where my career in
              technology takes me next, and I hope to make a positive impact on
              the world.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-half">
        <div className="certificate-container">
          <div className="certificate-border-container">
            <h2>Credentials</h2>
            <p>Certificate of Complettion in the Front-End Engineering Program at Turing School of Software & Design</p>
          </div>
        </div>
        <div className="accomplishments-container">
          <div className="accomplishments-border-container">
            <h2>Professional Accomplishments</h2>
            <p>~ Self-Learned GraphQL, Redux, SASS, Node.js with Express and MySQL </p>
            <p>~ Obtained valuable experience in handling high-pressure situations and leading teams at a young age, instilling a strong work ethic and sense of responsibility that is applied to my professional endeavors. </p>
          </div>
        </div>
      </div>
    </div>
  );
};
