import s from './MovieDetailsPage.module.scss';
import { Component } from 'react';
import { fetchMovieDetails } from 'api/moviesAPI';
import Loader from 'components/Loader/Loader';
import { NavLink, Route } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import routes from 'routes';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    const movieID = this.props.match.params.movieID;

    fetchMovieDetails(movieID)
      .then(movieDetails => this.setState({ movieDetails }))
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  }

  goBack = () => {
    this.props.history.push(this.props.location?.state?.from || '/movies');
  };

  render() {
    if (this.state.isLoading) return <Loader />;

    const {
      backdrop_path,
      poster_path,
      original_title,
      release_date,
      vote_average,
      genres,
      homepage,
      overview,
    } = this.state.movieDetails;

    return (
      <div
        className={s.movieDetailsPage}
        style={{
          backgroundColor: `rgba(255, 255, 255, 0.342)`,
          background: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundSize: `cover`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container">
          <div className={s.movieDetailsContent}>
            <button className={s.backBtn} onClick={this.goBack}>
              Back{' '}
            </button>
            <div className={s.movieMainInfo}>
              <div className={s.moviePoster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt=""
                />
              </div>
              <div className={s.movieDescription}>
                <h2 className={s.movieTitle}>{original_title}</h2>
                <p className={s.movieInfoField}>
                  <span className={s.movieInfoFieldTitle}>Release date:</span>{' '}
                  {release_date}
                </p>
                <p className={s.movieInfoField}>
                  <span className={s.movieInfoFieldTitle}>Rating:</span>{' '}
                  {vote_average * 10}%
                </p>
                <div className={s.movieInfoField}>
                  <div className={s.movieInfoFieldTitle}>Ganres:</div>
                  {genres.map(ganre => ganre.name + ' ')}
                </div>
                <div className={s.movieInfoField}>
                  <div className={s.movieInfoFieldTitle}>Homepage:</div>
                  <a target="_blank" href={homepage} rel="noreferrer">
                    {homepage}
                  </a>
                </div>
                <div className={s.movieOverview}>
                  <h3 className={s.OverviewTitle}>Overview:</h3>
                  <p className={s.overviewText}>{overview}</p>
                </div>
              </div>
            </div>
            <div className={s.movieAdditionalInfoLinks}>
              <h3 className={s.movieAdditionalInfoTitle}>
                Additional information:
              </h3>
              <ul className={s.linksList}>
                <li className={s.linksItem}>
                  <NavLink
                    className={s.movieAdditionalInfoLink}
                    to={{
                      pathname: this.props.match.url + routes.cast,
                      state: {
                        from: this.props.location?.state?.from,
                      },
                    }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={s.linksItem}>
                  <NavLink
                    className={s.movieAdditionalInfoLink}
                    to={{
                      pathname: this.props.match.url + routes.reviews,
                      state: {
                        from: this.props.location?.state?.from,
                      },
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={s.movieAdditionalContent}>
              <Route
                path={this.props.match.path + routes.cast}
                component={Cast}
              />
              <Route
                path={this.props.match.path + routes.reviews}
                component={Reviews}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
