import React, { PureComponent } from 'react';

class MovieItems extends PureComponent {
  render() {
    const { title, description } = this.props;
    return (
      <div className="movie-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.title !== this.props.title ||
           nextProps.description !== this.props.description
  }
};

export default MovieItems;;
