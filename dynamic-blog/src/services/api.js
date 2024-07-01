import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const fetchBlogPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

export const fetchBlogPostById = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
};
