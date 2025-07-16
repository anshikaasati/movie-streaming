import axios from 'axios';

const TMDB_TOKEN = '2b926c57f03200d64ee251e469e0b030';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: TMDB_TOKEN,
    },
});

export const fetchFromAPI = async (url, params = {}) => {
    try {
        const { data } = await tmdbApi.get(url, {
            params: {
                ...params
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

// Common API endpoints
export const endpoints = {
    trending: '/trending/all/day',
    movies: '/discover/movie',
    tvShows: '/discover/tv',
    search: '/search/multi',
    configuration: '/configuration',
    movieDetails: (id) => `/movie/${id}`,
    tvDetails: (id) => `/tv/${id}`,
    credits: (type, id) => `/${type}/${id}/credits`,
    similar: (type, id) => `/${type}/${id}/similar`,
    recommendations: (type, id) => `/${type}/${id}/recommendations`,
    videos: (type, id) => `/${type}/${id}/videos`,
};

export default tmdbApi;
