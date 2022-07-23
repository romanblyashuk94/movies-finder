import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import routes from 'routes';
import Loader from './Loader/Loader';

const HomePage = lazy(() =>
  import('../views/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    'views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
);

export const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
