import { useQuery } from 'react-query';
import movies from '../assets/movies';
import { Movie } from '../services/types';

const useMovies = () => useQuery<Movie[], Error>('movies', () => movies);

export default useMovies;
