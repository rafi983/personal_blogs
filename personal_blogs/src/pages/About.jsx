import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className="main">
      <section className="about section">
        <div className="about__container container">
          <div className="about__content">
            <img
              src="/src/assets/images/image-avatar.jpg"
              alt="Paulina's profile"
              className="about__image"
            />

            <div className="about__text">
              <h1 className="about__title">About Me</h1>
              <p className="about__description">
                Hi there! I'm Paulina, a passionate Frontend Developer who loves creating
                beautiful and functional web experiences. When I'm not coding, you can
                find me hiking in the mountains or planning my next rock climbing adventure.
              </p>

              <h2 className="about__subtitle">My Journey</h2>
              <p className="about__description">
                My path to web development started with a curiosity about how websites work.
                What began as a hobby quickly turned into a passion, and now I spend my days
                building projects and sharing what I learn along the way.
              </p>

              <div className="about__cta">
                <Link to="/blog" className="button">Read My Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
