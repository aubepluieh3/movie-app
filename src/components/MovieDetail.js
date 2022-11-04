import styles from "./MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieDetail({
  medium_cover_image,
  title_long,
  rating,
  genres,
  description,
}) {
  return (
    <div className={styles.movie}>
      <div className={styles.img}>
        <img src={medium_cover_image} className={styles.movie__img} />
      </div>
      <div>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <div className={styles.movie_genre} key={g}>
              {g}
            </div>
          ))}
        </ul>
        <h2 className={styles.movie__title}>{title_long}</h2>

        <div className={styles.movie__rating}>
          <i>
            <FontAwesomeIcon icon={faStar} />
          </i>
          <span>{rating}</span>
        </div>
        <span>
          {description.length > 350
            ? `${description.slice(0, 350)}...`
            : description}
        </span>
      </div>
    </div>
  );
}

export default MovieDetail;
