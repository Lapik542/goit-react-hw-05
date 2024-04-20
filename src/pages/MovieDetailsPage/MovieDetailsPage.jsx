import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDRmYTI4NTgwMTEzZTUwYTAwODMxNzI5Y2RiNDJkMSIsInN1YiI6IjY2MjM2MmI0MjU4ODIzMDE3ZDkwOWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS_cHseR5EDi-5aiqYNp3cVvehK5zvx4jsV2vweECnY&language=en-US`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => window.history.back()}>Go back</button>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
