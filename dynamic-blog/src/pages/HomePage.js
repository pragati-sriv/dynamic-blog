import React, { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../services/api';
import BlogPostPreview from '../components/BlogPostPreview';


const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
