import { Link, withRouter } from 'react-router-dom';
import routes from 'routes';
import s from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.moviesList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.moviesItem}>
            <Link
              to={{
                pathname: routes.movies + movie.id,
                state: {
                  from: location,
                },
              }}
              className={s.moviesLink}
            >
              <div className={s.moviesImage}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
              <p className={s.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MoviesList);
