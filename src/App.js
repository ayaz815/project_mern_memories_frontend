import React from 'react'
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import memories from './assets/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts';

function App() {
  return (
    <Container maxWidth = 'lg'>
<AppBar position='static' color='inherit' >
  <Typography variant='h2' align='center'>
Memories
  </Typography>
  <img src={memories} alt='memories' height={60}></img>
</AppBar>
<Container>
  <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
    <Grid item xs={12} sm={7}>
      <Posts />
    </Grid>
    <Grid item xs={12} sm={4}>
      <Form />
      </Grid> 
  </Grid>
</Container>
    </Container>
  );
}

export default App;
