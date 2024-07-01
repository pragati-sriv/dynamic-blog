import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostPreview.css'; 
import defaultImage from '../assets/default-image.png'

const BlogPostPreview = ({ post }) => {
  return (
    <div className="preview-container">
      <h2 className="title">{post.title}</h2>
      {/* <img className="image" src={post.image|| defaultImage} alt={post.title} /> */}
      <p className="author">By {post.author}</p>
      <p className="content">{post.content.substring(0, 100)}...</p>
      <Link className="read-more-link" to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default BlogPostPreview;
