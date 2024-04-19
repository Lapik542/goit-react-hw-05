import css from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {

  return (
    <div className={css.container}>
      <h1>MovieDetailsPage</h1>
      <div className={css.movieDetailsContainer}>
        <div className={css.movieContainer}>
          <h2>Movie 1</h2>
          <p>Details 1</p>
          </div>
        <div className={css.movieContainer}>
          <h2>Movie 2</h2>
          <p>Details 2</p>
          </div>
        <div className={css.movieContainer}>
          <h2>Movie 3</h2>
          <p>Details 3</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
