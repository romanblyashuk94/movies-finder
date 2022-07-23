import { fetchMovieReviews } from 'api/moviesAPI';
import Loader from 'components/Loader/Loader';
import { Component } from 'react';
import s from './Reviews.module.scss';
import ReviewsItem from './ReviewsItem/ReviewsItem';

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetchMovieReviews(this.props.match.params.movieID)
      .then(({ results }) => this.setState({ reviews: [...results] }))
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading, reviews } = this.state;

    if (isLoading) return <Loader />;
    if (reviews.length === 0 && !isLoading) {
      return <div className={s.noRewiesMessage}>There is no reviews!</div>;
    }
    return (
      <ul className={s.reviews}>
        {reviews.map(review => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
    );
  }
}

export default Reviews;
