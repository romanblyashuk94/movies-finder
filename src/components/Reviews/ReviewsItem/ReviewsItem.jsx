import s from './ReviewsItem.module.scss';

const ReviewsItem = ({ review }) => {
  return (
    <li className={s.reviewsItem}>
      <div className={s.reviewHeader}>
        <span className={s.reviewAuthor}>
          <span className={s.reviewHeaderTitle}>Author: </span>
          <span className={s.reviewAuthorName}>{review.author}</span>
        </span>
        <span className={s.reviewDate}>
          <span className={s.reviewHeaderTitle}>Date: </span>
          <span className={s.reviewDateNumber}>
            {review.created_at.slice(0, 10)}
          </span>
        </span>
      </div>
      <div className={s.reviewContent}>{review.content}</div>
    </li>
  );
};

export default ReviewsItem;
