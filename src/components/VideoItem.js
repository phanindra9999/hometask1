import React from 'react';

const VideoItem = ({ video }) => {
  const handleImageError = (event) => {
    event.target.src = 'path_to_placeholder_image.png'; // Provide a path to a placeholder image
    event.target.alt = 'Image failed to load';
  };

  return (
    <div className="video-item">
      <h2>{video.snippet?.title || 'Title not available'}</h2>
      <img 
        src={video.snippet?.thumbnails?.medium?.url || ''} 
        alt={video.snippet?.title || 'Video'} 
        onError={handleImageError}
      />
      <p>{video.snippet?.description || 'Description not available'}</p>
    </div>
  );
};

export default VideoItem;
