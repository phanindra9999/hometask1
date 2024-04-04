import React, { Component } from 'react';
import { List, Map } from 'immutable';
import MovieItems from './MovieItems';


class MovieList extends Component {
  state = {
    movies: List([
      Map({
        id: 1,
        title: 'Temper',
        description: 'The narrative revolves around Daya, a corrupt police officer whose life changes after a brawl that eventually leads to him stumbling upon a murder case. N. T. Rama Rao Jr. Temper was produced by Bandla Ganesh on Parameswara Art Productions banner.',
      }),
      Map({
        id: 2,
        title:'RRR',
        description: 'RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. Charan plays Rama Raju while Rama Rao plays Komaram Bheem.',
      }),
      
    ]),
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieItems
            key={movie.get('id')}
            title={movie.get('title')}
            description={movie.get('description')}
            poster={movie.get('poster')}
          />
        ))}
      </div>
    );
        }
};

export default MovieList;
