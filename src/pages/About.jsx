import React from "react";
// Import workspace images and social icons
import workspaceLarge from "../assets/images/image-workspace-large.jpg";
import workspaceSmall from "../assets/images/image-workspace-small.jpg";
import logoFrontendMentor from "../assets/images/logo-frontend-mentor.svg";
import logoGitHub from "../assets/images/logo-github.svg";
import logoLinkedin from "../assets/images/logo-linkedin.svg";
import logoX from "../assets/images/logo-x.svg";

const About = () => {
  return (
    <main className="main">
      <section className="about">
        <h1 className="about__title">About Me</h1>

        <p className="about__text">
          Hi, I'm Paulina! Ever since I can remember, I've had a passion for
          creativity and problem-solving. That's what led me to the world of
          front-end web development. There's something magical about seeing an
          idea come to life in the browser—whether it's a simple layout
          experiment or a complex interface for a bigger project.
        </p>

        <p className="about__text">
          When I'm not coding, I love getting lost in a good book. My taste is
          pretty eclectic: I'll happily read everything from fantasy novels to
          biographies of tech pioneers. Reading helps me unwind and often sparks
          new ideas for my coding projects.
        </p>

        <p className="about__text">
          Another big passion of mine is the great outdoors. Hiking allows me to
          disconnect from the digital world and reconnect with nature. I love
          challenging hikes with rewarding views at the top. And if I'm not on
          the trails, you might catch me rock climbing. The combination of
          mental focus and physical endurance is a perfect parallel to tackling
          tough coding challenges!
        </p>

        <p className="about__text">Some of my favorite books:</p>

        <ul className="about__list">
          <li className="about__item">
            <span>“The Pragmatic Programmer”</span> by Andrew Hunt and David
            Thomas (for helpful insights into software development)
          </li>
          <li className="about__item">
            <span>“Ready Player One”</span> by Ernest Cline (for some futuristic
            escapism)
          </li>
          <li className="about__item">
            <span>“The Hobbit”</span> by J.R.R. Tolkien (for a bit of fantasy
            fun)
          </li>
          <li className="about__item">
            <span>“Educated”</span> by Tara Westover (for incredible
            inspiration)
          </li>
        </ul>

        <p className="about__text">
          I absolutely love my workspace as a place that inspires me to do my
          best work, so I thought I'd share it with you:
        </p>

        <picture className="about__pic">
          <source media="(max-width: 768px)" srcSet={workspaceSmall} />
          <img src={workspaceLarge} alt="My workspace" className="about__img" />
        </picture>

        <p className="about__text">
          I hope this blog not only documents my growth but also helps others
          see that coding can be for everyone. Thanks for joining me on this
          journey!
        </p>

        <h2 className="about__socials">Follow me</h2>

        <ul className="about__socials-list">
          <li className="about__socials-item">
            <a href="#X" className="about__socials-item-link">
              <img
                src={logoX}
                alt="My X/Twitter page"
                className="about__social"
              />
            </a>
          </li>
          <li className="about__socials-item">
            <a href="#GitHub" className="about__socials-item-link">
              <img
                src={logoGitHub}
                alt="My GitHub page"
                className="about__social"
              />
            </a>
          </li>
          <li className="about__socials-item">
            <a href="#Linkedin" className="about__socials-item-link">
              <img
                src={logoLinkedin}
                alt="My Linkedin page"
                className="about__social"
              />
            </a>
          </li>
          <li className="about__socials-item">
            <a href="#FrontendMentor" className="about__socials-item-link">
              <img
                src={logoFrontendMentor}
                alt="My Frontend Mentor page"
                className="about__social"
              />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
