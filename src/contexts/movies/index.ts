import { createContext } from 'react';
import { Movie } from '../../services/types';

interface MoviesContextValue {
  movies: Movie[];
  deleteMovie: (movieId: string) => void;
}

const MoviesContext = createContext<MoviesContextValue>({
  movies: [],
  deleteMovie: () => null,
});

export default MoviesContext;
