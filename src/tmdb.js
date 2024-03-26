import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '0ddf8c05707f4cf9f269ffc03308d921';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const searchMovies = async (query) => {
  try {
    const response = await axiosInstance.get(`/search/movie?query=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

