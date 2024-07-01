import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPostById } from '../services/api';
import SocialMediaShare from '../components/SocialMediaShare';


const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchBlogPostById(id).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>By {post.author}</p>
      <p>{post.content}</p>
      <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer">Author's LinkedIn</a>
      <SocialMediaShare url={window.location.href} />
    </div>
  );
};

export default BlogPostPage;
