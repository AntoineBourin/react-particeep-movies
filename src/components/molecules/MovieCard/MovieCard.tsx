import React, { useContext } from 'react';
import MoviesContext from '../../../contexts/movies';
import { Movie } from '../../../services/types';
import Gauge from '../../atoms/Gauge/Gauge';
import Wrapper from './style';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { deleteMovie } = useContext(MoviesContext);

  return (
    <Wrapper>
      <h2>{movie.title}</h2>
      <p>{movie.category}</p>
      <button type="button" onClick={() => deleteMovie(movie.id)}>delete</button>
      <Gauge
        indicators={[
          { count: movie.likes, color: 'green' },
          { count: movie.dislikes, color: 'red' },
        ]}
      />
    </Wrapper>
  );
};

export default MovieCard;
