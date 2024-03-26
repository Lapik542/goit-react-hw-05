
import { useParams } from 'react-router-dom';
import MovieList from './MovieList';

const MoviesPage = ({ movies }) => {
  const { query } = useParams();

  return (
    <div>
      <h1>Search Results for `${query}`</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
