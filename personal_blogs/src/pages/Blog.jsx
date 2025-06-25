import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/blogData'

const Blog = () => {
  const posts = getAllPosts().sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <section className="blog">
      <h1 className="blog__title">My Articles</h1>
      <p className="blog__text">
        Below are all my recent blog posts. Click on any title to read the
        full article.
      </p>
      <div className="blog__articles">
        {posts.map(post => (
          <div key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              <h3 className="blog__article-title">{post.title}</h3>
            </Link>
            <p className="blog__article-date">{post.date}</p>
            <p className="blog__article-description">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
