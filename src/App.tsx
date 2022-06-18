import React from 'react';
import { QueryClientProvider } from 'react-query';
import Home from './components/pages/Home';
import queryClient from './services/client';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

export default App;
