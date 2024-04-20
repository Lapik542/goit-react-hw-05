import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews'; 

const MovieDetailsPage = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find(movie => movie.id.toString() === movieId);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const fetchCast = () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDRmYTI4NTgwMTEzZTUwYTAwODMxNzI5Y2RiNDJkMSIsInN1YiI6IjY2MjM2MmI0MjU4ODIzMDE3ZDkwOWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS_cHseR5EDi-5aiqYNp3cVvehK5zvx4jsV2vweECnY'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setCast(response.data.cast);
        setLoading(false);
        setActiveComponent('cast');
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  };

  const toggleComponent = (component) => {
    if (component === activeComponent) {
      setActiveComponent(null);
    } else {
      setActiveComponent(component);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button onClick={() => window.history.back()}>Go back</button>
      <br />
      <br />
      <div>
        <img id={movieId} width={300} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
      <hr />
      Additional info
      <ul>
        <li>
          <a onClick={fetchCast}>Cast</a>
        </li>
        <li>
          <a onClick={() => toggleComponent('reviews')}>Reviews</a> 
        </li>
      </ul>
      <hr />
      {activeComponent === 'reviews' && <MovieReviews movieId={movieId} />}
      {activeComponent === 'cast' && (
        <>
          {loading ? (
            <div>Loading cast...</div>
          ) : (
            <MovieCast cast={cast} />
          )}
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
