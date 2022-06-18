import React, { useContext } from 'react';
import MoviesContext from '../../../contexts/movies';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import Wrapper from './style';

const MovieList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Wrapper>
  );
};

export default MovieList;
