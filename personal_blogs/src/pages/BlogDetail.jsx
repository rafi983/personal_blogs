import React from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { blogPosts, getPostBySlug } from "../utils/blogData";

import remarkGfm from "remark-gfm";


import "../styles/articles.css";
import "../styles/hover-focus.css";
import "../styles/prism.css";
import "../styles/reset.css";
import "../styles/responsive.css";
import "../styles/style.css";
import "../styles/variables.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="main">
        <section className="article">
          <h1 className="article__title">Post Not Found</h1>
          <p className="article__date">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="blog-detail__nav-link">
            ← Back to Blog
          </Link>
        </section>
      </main>
    );
  }


  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;


  let formattedDate = '';
  try {
    formattedDate = post && post.publishedAt
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.publishedAt))
      : '';
  } catch (e) {
    formattedDate = post && post.publishedAt ? post.publishedAt : '';
  }


  const renderers = {
    h1: ({ children }) => <h1 className="article__heading">{children}</h1>,
    h2: ({ children }) => <h2 className="article__heading">{children}</h2>,
    h3: ({ children }) => <h3 className="article__subheading">{children}</h3>,
    p: ({ children }) => <p className="article__paragraph">{children}</p>,
    ul: ({ children }) => <ul className="article__list">{children}</ul>,
    li: ({ children }) => <li className="article__list-item">{children}</li>,
    blockquote: ({ children }) => {
      let text = "";
      if (Array.isArray(children)) {
        text = children
          .map((child) => {
            if (typeof child === "string") return child;
            if (child && child.props && child.props.children) {
              if (typeof child.props.children === "string")
                return child.props.children;
              if (Array.isArray(child.props.children))
                return child.props.children.join("");
            }
            return "";
          })
          .join("");
      } else if (typeof children === "string") {
        text = children;
      }
      const tipMatch = text.match(/^\s*\*\*Tip:\*\*\s*(.*)$/i);
      const warningMatch = text.match(/^\s*\*\*Warning:\*\*\s*(.*)$/i);
      const infoMatch = text.match(/^\s*\*\*Info:\*\*\s*(.*)$/i);
      if (tipMatch) {
        return <div className="article__tip"><img src={require('../assets/images/icon-tip.svg')} alt="Tip" style={{marginRight: '0.8rem', width: '1.8rem', height: '1.8rem'}} />{tipMatch[1]}</div>;
      }
      if (warningMatch) {
        return <div className="article__warning">{warningMatch[1]}</div>;
      }
      if (infoMatch) {
        return <div className="article__info">{infoMatch[1]}</div>;
      }
      return <blockquote className="article__quote">{children}</blockquote>;
    },
  };

  return (
    <>
      <main className="main">
        <section className="article">
          <h1 className="article__title">{post.title}</h1>
          <p className="article__date">{formattedDate}</p>
          <div className="article__content">
            <ReactMarkdown
              children={post.content}
              remarkPlugins={[remarkGfm]}
              components={renderers}
            />
          </div>

          <nav className="blog-detail__navigation">
            <div className="blog-detail__nav-wrapper">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="blog-detail__nav-link"
                >
                  ← {prevPost.title}
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="blog-detail__nav-link"
                >
                  {nextPost.title} →
                </Link>
              )}
            </div>
          </nav>
        </section>
      </main>
      <div className="background after"></div>
    </>
  );
};

export default BlogDetail;