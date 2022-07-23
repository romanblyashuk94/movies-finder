import { fetchMovieCast } from 'api/moviesAPI';
import Loader from 'components/Loader/Loader';
import { Component } from 'react';
import s from './Cast.module.scss';
import CastItem from './CastItem/CastItem';

class Cast extends Component {
  state = {
    castActors: [],
  };

  setCastActors = cast => {
    let actorsWithPhoto = [];

    cast.forEach(achtor => {
      if (achtor.profile_path) {
        actorsWithPhoto.push(achtor);
      }
    });

    this.setState({
      castActors: [...actorsWithPhoto],
    });
  };

  componentDidMount() {
    fetchMovieCast(this.props.match.params.movieID).then(({ cast }) =>
      this.setCastActors(cast)
    );
  }

  render() {
    const { castActors } = this.state;

    if (castActors.length === 0) return <Loader />;

    return (
      <ul className={s.cast}>
        {castActors.map(actor => (
          <CastItem key={actor.id} actor={actor} />
        ))}
      </ul>
    );
  }
}

export default Cast;
