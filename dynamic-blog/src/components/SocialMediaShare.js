import React from 'react';
import './SocialMediaShare.css';

const SocialMediaShare = ({ url }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${url}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${url}`, '_blank');
  };

  return (
    <div className="social-media-share">
      <button onClick={shareOnFacebook}>Share on Facebook</button>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
      <button onClick={shareOnLinkedIn}>Share on LinkedIn</button>
    </div>
  );
};

export default SocialMediaShare;
