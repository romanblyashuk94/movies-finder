import s from './CastItem.module.scss';

const CastItem = ({ actor }) => {
  return (
    <li className={s.castItem}>
      <div className={s.actorImage}>
        <img
          src={`https://image.tmdb.org/t/p/w500` + actor.profile_path}
          alt=""
        />
      </div>
      <p className={s.actorName}>{actor.name}</p>
      <p className={s.actorRole}>{actor.character}</p>
    </li>
  );
};

export default CastItem;
