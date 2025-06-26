import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/blogData'

const Blog = () => {
  const posts = getAllPosts()

  return (
    <section className="blog">
      <h1 className="blog__title">My Articles</h1>
      <p className="blog__text">
        Below are all my recent blog posts. Click on any title to read the
        full article.
      </p>
      <div className="blog__articles">
        {posts.map(post => {
          const formattedDate = post.publishedAt
            ? new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(post.publishedAt))
            : ''
          return (
            <div key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <h3 className="blog__article-title">{post.title}</h3>
              </Link>
              <p className="blog__article-date">{formattedDate}</p>
              <p className="blog__article-description">{post.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
