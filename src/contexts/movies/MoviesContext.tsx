import React, {
  ReactElement, useEffect, useState,
} from 'react';
import moviesData from '../../assets/movies';
import { Movie } from '../../services/types';
import MoviesContext from './index';

interface MoviesContextProviderProps {
  children: ReactElement;
}

const MoviesContextProvider: React.FC<MoviesContextProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    moviesData.then((response) => {
      setMovies(response);
    });
  }, []);

  const deleteMovie = (movieId: string) => {
    setMovies((currentMovies) => currentMovies.filter((movie) => movie.id !== movieId));
  };

  const value = { movies, deleteMovie };
  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
