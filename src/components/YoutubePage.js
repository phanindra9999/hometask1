import React, { PureComponent } from 'react';

class YouTubePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      error: null
    };
    this.API_KEY = 'AIzaSyB226cf9yIs-qvjlBGam_p7yTXSI1pIHBI';
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=relevance&key=${this.API_KEY}&q=Javascript`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      this.setState({ videos: data.items });
    } catch (error) {
      console.error('Error fetching data: ', error);
      this.setState({ error: 'Failed to fetch YouTube videos. Please try again later.' });
    }
  };

  handleImageError = (event) => {
    event.target.src = 'path_to_placeholder_image.png'; // Provide a path to a placeholder image
    event.target.alt = 'Image failed to load';
  };

  render() {
    const { videos, error } = this.state;

    return (
      <div>
        <h1>YouTube Search Results</h1>
        
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="video-list">
            {videos.map((video, index) => (
              <div key={index} className="video-item">
                <h2>{video.snippet?.title || 'Title not available'}</h2>
                <img 
                  src={video.snippet?.thumbnails?.medium?.url || ''} 
                  alt={video.snippet?.title || 'Video'} 
                  onError={this.handleImageError}
                />
                <p>{video.snippet?.description || 'Description not available'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default YouTubePage;
