import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchMovieBySearchQuery } from 'api/moviesAPI';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import s from './MoviesPage.module.scss';
import getQueryParams from 'utils/getQueryParams';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    page: 1,
    movies: [],
    isLoading: false,
  };

  handleSumbitForm = searchQuery => {
    this.setState({
      searchQuery,
      movies: [],
      page: 1,
    });

    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  setMoviesBySearchQuery = () => {
    const { page } = this.state;
    const searchQuery = getQueryParams(this.props.location.search).query;

    this.setState({ isLoading: true });

    fetchMovieBySearchQuery(searchQuery, page)
      .then(({ results }) => {
        let corectMovies = [];

        if (results.length > 0) {
          results.forEach(movie => {
            const isMovieCorect = movie.title && movie.poster_path;
            if (isMovieCorect) corectMovies.push(movie);
          });
        } else {
          Notify.failure(
            `There are no more movies by ${this.state.searchQuery} request!`
          );
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
    const searchQuery = getQueryParams(this.props.location.search).query;

    if (searchQuery) {
      this.setMoviesBySearchQuery();
    }
  }
  componentDidUpdate(prevProps) {
    const prevSearchQuery = getQueryParams(prevProps.location.search).query;
    const currentSearchQuery = getQueryParams(this.props.location.search).query;
    if (prevSearchQuery !== currentSearchQuery) {
      this.setMoviesBySearchQuery();
    }
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div className={s.moviesPage}>
        <div className="container">
          <h1 className={s.moviesPageTitle}>Find movies</h1>
          <SearchForm onSubmit={this.handleSumbitForm} />
          {movies.length > 0 && <MoviesList movies={movies} />}
          {isLoading && <Loader />}
          {movies.length > 0 && !isLoading && (
            <Button action={this.setMoviesBySearchQuery} label="LOAD MORE" />
          )}
        </div>
      </div>
    );
  }
}

export default MoviesPage;
