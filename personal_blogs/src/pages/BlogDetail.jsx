import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPostBySlug, blogPosts } from '../utils/blogData'
import { marked } from 'marked'
import '../styles/blog-detail.css'
import '../styles/articles.css'
import '../styles/prism.css'
import '../styles/hover-focus.css'
import '../styles/variables.css'
import '../styles/style.css'
import '../styles/responsive.css'

const BlogDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  if (!post) {
    navigate('/blog')
    return null
  }

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  // Render markdown content as HTML
  const renderContent = (content) => {
    if (!content) return null

    // Enhance markdown rendering for tips, warnings, and info blocks
    const enhancedContent = content
      .replace(/> \*\*Tip:\*\*/g, '<div class="article__tip">')
      .replace(/> \*\*Warning:\*\*/g, '<div class="article__warning">')
      .replace(/> \*\*Info:\*\*/g, '<div class="article__info">')
      .replace(/\n---\n/g, '<hr />')

    return <div className="article__content" dangerouslySetInnerHTML={{ __html: marked.parse(enhancedContent) }} />
  }

  return (
    <>
      <main className="main">
        <section className="article">
          <h1 className="article__title">{post.title}</h1>
          <p className="article__date">{post.date}</p>
          {renderContent(post.content)}
          <nav className="blog-detail__navigation">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} className="blog-detail__nav-link">
                ← {prevPost.title}
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="blog-detail__nav-link">
                {nextPost.title} →
              </Link>
            )}
          </nav>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">Made with ❤️ and ☕</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#X" className="footer__item-link">
              <img
                src="../assets/images/logo-x.svg"
                alt="My X/Twitter page"
                className="footer__social"
              />
            </a>
          </li>
          <li className="footer__item">
            <a href="#GitHub" className="footer__item-link">
              <img
                src="../assets/images/logo-github.svg"
                alt="My GitHub page"
                className="footer__social"
              />
            </a>
          </li>
          <li className="footer__item">
            <a href="#Linkedin" className="footer__item-link">
              <img
                src="../assets/images/logo-linkedin.svg"
                alt="My Linkedin page"
                className="footer__social"
              />
            </a>
          </li>
          <li className="footer__item">
            <a href="#FrontendMentor" className="footer__item-link">
              <img
                src="../assets/images/logo-frontend-mentor.svg"
                alt="My Frontend Mentor page"
                className="footer__social"
              />
            </a>
          </li>
        </ul>

        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="attribution__link"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            href="https://xuaun.github.io/"
            target="_blank"
            className="attribution__link"
          >
            João Víctor de Araujo Lima
          </a>
          .
        </div>
      </footer>

      <div className="background after"></div>
    </>
  )
}

export default BlogDetail
