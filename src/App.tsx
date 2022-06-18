import React from 'react';
import Home from './components/pages/Home/Home';
import MoviesContextProvider from './contexts/movies/MoviesContext';

const App = () => (
  <MoviesContextProvider>
    <Home />
  </MoviesContextProvider>
);

export default App;
