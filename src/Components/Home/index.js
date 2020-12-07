import React, {useState, useEffect} from 'react';
import ArticleList from '../ArticleList';
import ArticleService from '../../Services/ArticleService';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

const Home = ({searchTerm, type}) => {
  const [articles, setArticles] = useState([])
  const [latestArticles, setLatestArticles] = useState([])

  useEffect(() => {
    ArticleService.getMostViewedArticles() 
      .then(res => {
        setArticles(res.data.results);
      })
  }, [])

  useEffect(() => {
    ArticleService.getArticlesByQuery(searchTerm, type) 
      .then(res => {
        setLatestArticles(res.data.response.docs);
      })
  }, [searchTerm, type])

  return (
    <div>
      <ArticleList 
        searchTerm={searchTerm}
        title='Featured News'
        articles={articles}
      />
      <Divider />
      <ArticleList 
        showImages={false}
        title='Latest News'
        articlesPerPage={9}
        type={type}
        articles={latestArticles}
      />
    </div>
 )
}

Home.propTypes = {
  searchTerm: PropTypes.string,
  type: PropTypes.string,
}

export default Home;