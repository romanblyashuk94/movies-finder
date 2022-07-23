import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTrending } from 'api/moviesAPI';
import s from './HomePage.module.scss';
import MoviesList from 'components/MoviesList/MoviesList';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
  };

  setMovies = () => {
    this.setState({ isLoading: true });

    fetchTrending(this.state.page)
      .then(({ results }) => {
        let corectMovies = [];

        if (results.length > 0) {
          results.forEach(movie => {
            if (movie.title && movie.poster_path) corectMovies.push(movie);
          });
        } else {
          Notify.failure(`There are no more tranding movies`);
        }

        this.setState(prevState => ({
          movies: [...prevState.movies, ...corectMovies],
          page: prevState.page + 1,
        }));
      })
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.setMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div className={s.homePage}>
        <div className="container">
          <h1 className={s.homePage__title}>Top Rating Films</h1>
          {movies.length > 0 && <MoviesList movies={movies} />}
          {isLoading && <Loader />}
          {movies.length > 0 && !isLoading && (
            <Button action={this.setMovies} label="LOAD MORE" />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
