import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppMenu from './Components/AppMenu';

const App = () => {
  return (
    <>
      <Grid container spacing={2}>
        <AppMenu brand='McFadyen News' />
      </Grid>
    </>
  )
}

export default App;