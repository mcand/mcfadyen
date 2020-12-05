import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AppMenu from './Components/AppMenu';
import ArticleList from './Components/ArticleList';
import ArticleService from './Services/ArticleService';
import { Divider } from '@material-ui/core';

const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    ArticleService.getMostViewedArticles()
      .then(res => {
        setArticles(res.data.results);
      })

  }, [])
  return (
    <>
      <Grid container spacing={2}>
        <AppMenu brand='McFadyen News' />
        <Grid item xs={12}>
          <ArticleList title='Featured News' articles={articles} />
          <Divider />
          <ArticleList showImages={false} title='Latest News' articlesPerPage={9} articles={articles} />
          </Grid>
      </Grid>
    </>
  )
}

export default App;