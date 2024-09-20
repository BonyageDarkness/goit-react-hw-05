import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch trending movies
export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data.results;
};

// Search movies by query
export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                query: query,
                api_key: API_KEY,
                language: 'en-US',
                page: 1,
                include_adult: false,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};

// Fetch movie details by movie ID
export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data;
};

// Fetch movie cast by movie ID
export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
        params: {
            api_key: API_KEY,
        },
    });
    return response.data.cast;
};

// Fetch movie reviews by movie ID
export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
        params: {
            api_key: API_KEY, // Передача API-ключа как параметра запроса
        },
    });
    return response.data.results;
};
