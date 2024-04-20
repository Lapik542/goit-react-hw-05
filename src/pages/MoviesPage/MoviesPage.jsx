import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDRmYTI4NTgwMTEzZTUwYTAwODMxNzI5Y2RiNDJkMSIsInN1YiI6IjY2MjM2MmI0MjU4ODIzMDE3ZDkwOWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS_cHseR5EDi-5aiqYNp3cVvehK5zvx4jsV2vweECnY'
        }
      });
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h2>Search Result</h2>
          <ul>
            {searchResult.results.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <h3>{movie.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MoviesPage;
