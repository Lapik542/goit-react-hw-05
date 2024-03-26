
import { useParams } from 'react-router-dom';
import MovieCast from '../../components/MovieCast';
import MovieReviews from '../../components/MovieReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <h2>Cast</h2>
      <MovieCast movieId={movieId} />
      <h2>Reviews</h2>
      <MovieReviews movieId={movieId} />
    </div>
  );
};

export default MovieDetailsPage;
