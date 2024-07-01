import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
