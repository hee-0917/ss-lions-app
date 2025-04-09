import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <HomePage />
      </Container>
    </>
  );
}

export default App;
