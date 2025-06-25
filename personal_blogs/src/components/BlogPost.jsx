import { Link } from 'react-router-dom'

const BlogPost = ({ post }) => {
  return (
    <article className="blog__post">
      <div className="blog__content">
        <span className="blog__category">{post.category}</span>
        <h2 className="blog__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="blog__description">{post.description}</p>
        <div className="blog__data">
          <span className="blog__published">{post.date}</span>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
