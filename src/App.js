import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AppMenu from './Components/AppMenu';
import Home from './Components/Home';
import Details from './Components/Details';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [type, setType] = useState('newest')

  return (
    <>
      <BrowserRouter>
        <Grid container spacing={2}>
          <AppMenu brand='McFadyen News' onTypeChange={value => setType(value)} onChange={value=> setSearchTerm(value)} />
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/">
                <Home type={type} searchTerm={searchTerm} />
              </Route>
              <Route path="/details/:id">
                <Details />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  )
}

export default App;