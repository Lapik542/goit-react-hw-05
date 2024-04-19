import { Route, Routes, } from "react-router-dom";
import { clsx } from "clsx";
import css from "./App.module.css";

// PAGES
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../../Navigation/Navigation";
// PAGES

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <>
    <h1>Page</h1>

    <Navigation buildLinkClass={buildLinkClass} />

    <Routes>
      <Route path="homepage" element={<HomePage />} />

      <Route path="movies-page" element={<MoviesPage />} >
        <Route path=":movieId" element={<div>More info about id</div>} />
        <Route path="movie-details-page/:movieId" element={<MovieDetailsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  );
};

export default App;
