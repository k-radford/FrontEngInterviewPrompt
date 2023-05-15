// Kaitlin Radford kaitlinradford@comcast.net

import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import EditMessage from './components/edit/editMessage';
import MessageNode from './components/node/messageNode';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007DFF'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <Grid container spacing={10} direction={'row'} wrap={'wrap'}>
        <Grid item>
          <EditMessage/>
        </Grid>
        <Grid item>
          <MessageNode/>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default App;
