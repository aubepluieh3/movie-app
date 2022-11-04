import styles from "./MovieDetail.module.css";
function MovieDetail({
  medium_cover_image,
  title,
  year,
  rating,
  genres,
  description,
}) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>{title}</h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <h3 className={styles.movie__rating}>{rating}</h3>
        <p>{description}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetail;
