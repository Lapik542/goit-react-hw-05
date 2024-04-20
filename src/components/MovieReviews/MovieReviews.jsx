import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDRmYTI4NTgwMTEzZTUwYTAwODMxNzI5Y2RiNDJkMSIsInN1YiI6IjY2MjM2MmI0MjU4ODIzMDE3ZDkwOWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS_cHseR5EDi-5aiqYNp3cVvehK5zvx4jsV2vweECnY'
          }
        });
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
      setLoading(false);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.content}</p>
              <p>- {review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
