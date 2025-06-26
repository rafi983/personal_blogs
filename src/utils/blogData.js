import blogPosts from './data.json';

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export { blogPosts };
