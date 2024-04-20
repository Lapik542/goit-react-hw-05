import MovieList from "../../components/MovieList/MovieList";

const HomePage = ({movies}) => {
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
