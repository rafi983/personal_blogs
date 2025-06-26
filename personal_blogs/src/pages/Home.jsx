import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/blogData'

const Home = () => {
  const latestPosts = getAllPosts().slice(0, 5)

  return (
      <main className="main">
        <section className="intro">
          <h1 className="intro__title">Hi, I'm Paulina 👋</h1>
          <p className="intro__text">
            I'm on a journey to become a front-end web developer. I love building
            little projects, trying out new coding techniques, and sharing what I
            learn along the way. When I'm not at my desk, you'll find me reading,
            hiking through the mountains, or challenging myself on rock-climbing
            walls.
          </p>
          <p className="intro__text">
            I started this blog to document my progress, keep myself accountable,
            and hopefully inspire anyone else who's learning to code. Welcome to
            my corner of the internet, and thanks for stopping by!
          </p>
          <ul className="intro__list">
            <li className="intro__item">
              <a href="#X" className="intro__item-link">
                <img
                    src="/src/assets/images/logo-x.svg"
                    alt="My X/Twitter page"
                    className="intro__social"
                />
              </a>
            </li>
            <li className="intro__item">
              <a href="#GitHub" className="intro__item-link">
                <img
                    src="/src/assets/images/logo-github.svg"
                    alt="My GitHub page"
                    className="intro__social"
                />
              </a>
            </li>
            <li className="intro__item">
              <a href="#Linkedin" className="intro__item-link">
                <img
                    src="/src/assets/images/logo-linkedin.svg"
                    alt="My Linkedin page"
                    className="intro__social"
                />
              </a>
            </li>
            <li className="intro__item">
              <a href="#FrontendMentor" className="intro__item-link">
                <img
                    src="/src/assets/images/logo-frontend-mentor.svg"
                    alt="My Frontend Mentor page"
                    className="intro__social"
                />
              </a>
            </li>
          </ul>
        </section>

        <section className="articles">
          <h2 className="articles__title">Latest Articles</h2>

          <div className="articles__latest">
            {latestPosts.map((post) => {
              const formattedDate = post.publishedAt
                  ? new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(post.publishedAt))
                  : ''

              return (
                  <div key={post.slug} className="articles__item">
                    <Link to={`/blog/${post.slug}`} className="articles__article-link">
                      <h3 className="articles__article-title">{post.title}</h3>
                    </Link>
                    <p className="articles__article-date">{formattedDate}</p>
                  </div>
              )
            })}
          </div>

          <p className="articles__text">
            <Link to="/blog" className="articles__link">
              View all articles
            </Link>
          </p>
        </section>
      </main>
  )
}

export default Home