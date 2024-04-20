import { Route, Routes, } from "react-router-dom";
import { useEffect, useState } from "react";

import { getTrendingMovies } from "../../tmdb";

import MovieCast from "../MovieCast/MovieCast";

// PAGES
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieReviews from "../../pages/MovieReviews/MovieReviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../../Navigation/Navigation";
// PAGES

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTrendingMovies();
      setMovies(data.results);
    }
    fetchData();
  }, []);


  return (
    <>
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage movies={movies} />} key="/" />
      <Route path="/movie" element={<MoviesPage />} key="/movie" />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} key="/moviedetailspage" >
        <Route path="/movies/:movieId/cast" element={<MovieCast />} key="/movie" />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} key="/moviereviews" />
      </Route>
      <Route path="*" element={<NotFoundPage />} key="*" />
    </Routes>   
    </>
  );
};

export default App;
