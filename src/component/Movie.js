import { Link } from 'react-router-dom';
import styles from "../css/Movie.module.css";

export default function Movie({ id, image, tit, year, smry, genres }) {
  return <div className={styles.movie}>
    <img src={image} alt={image} className={styles.movie__img} />
    <div>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{tit}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{smry.length > 235 ? `${smry.slice(0, 235)}...` : smry}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  </div>
}
