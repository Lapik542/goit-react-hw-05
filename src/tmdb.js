
import axios from 'axios';

const url = '/3/trending/movie/day';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const getTrendingMovies = async () => {
  const response = await axios.get(url);
  return response.data;
}

getTrendingMovies();

const options = {
headers: {
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDRmYTI4NTgwMTEzZTUwYTAwODMxNzI5Y2RiNDJkMSIsInN1YiI6IjY2MjM2MmI0MjU4ODIzMDE3ZDkwOWJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS_cHseR5EDi-5aiqYNp3cVvehK5zvx4jsV2vweECnY'
}
};

axios.get(url, options)
.then(response => console.log(response.data))
.catch(err => console.error(err));

