import { Link, Outlet } from "react-router-dom";
import css from "./MoviesPage.module.css";
const MoviesPage = () => {
  return (
    <div>
      <h1>MoviesPage</h1>
      <div className={css.container}>
      <div className={css.movieDetailsContainer}>
        <div className={css.movieContainer}>
          <h2>Movie 1</h2>
          <p>Details 1</p>
          <button><Link to={"/movies-page/1"}>More</Link></button>
          <button><Link to={"/movies-page/movie-details-page/1"}>Details</Link></button>
          </div>
        <div className={css.movieContainer}>
          <h2>Movie 2</h2>
          <p>Details 2</p>
          <button><Link to={"/movies-page/2"}>More</Link></button>
          <button><Link to={"/movies-page/movie-details-page/2"}>Details</Link></button>
          </div>
        <div className={css.movieContainer}>
          <h2>Movie 3</h2>
          <p>Details 3</p>
          <button><Link to={"/movies-page/3"}>More</Link></button>
          <button><Link to={`/movies-page/movie-details-page/3`}>Details</Link></button>
        </div>
      </div>
    </div>
    <Outlet/>
    </div>
  );
};

export default MoviesPage;
