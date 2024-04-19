import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {

  const {movieId} = useParams();
  console.log(movieId);

  return (
    <div className={css.container}>
      <h1>MovieDetailsPage</h1>
      <div className={css.movieDetailsContainer}>
        <div className={css.movieContainer}>
          <h2>Movie {movieId}</h2>
          <p>Details {movieId}</p>
          </div>
        <div className={css.movieContainer}>
          <h2>Movie {movieId}</h2>
          <p>Details {movieId}</p>
          </div>
        <div className={css.movieContainer}>
          <h2>Movie {movieId}</h2>
          <p>Details {movieId}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
