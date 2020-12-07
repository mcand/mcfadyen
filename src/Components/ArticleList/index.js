import React, {useState} from 'react';
import Article from '../Article';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import Pagination from '@material-ui/lab/Pagination';

const ArticleList = ({title, articles, showImages, articlesPerPage }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleChange = (event,value) => {
    setCurrentPage(value);
  }

  const renderArticles = () => {
    return currentArticles.map((article, index) => getArticle(article, index))
  }

  const getArticle = (article, index) => {
    const uri = article.uri.match(/[^/]+$/)[0];
    return (
      <Article 
        key={index}
        id={uri}
        title={article.title || article.headline.main}
        abstract={article.abstract}
        shouldShowImage={showImages}
        imageUrl={article.media && article.media[0] && article.media[0]['media-metadata'][2]['url']} 
      />
    );
  }
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <Grid container spacing={0}>
        {
          renderArticles()
        }
        <Grid item lg={12}>
          <Pagination className={classes.pagination} size="large" shape="rounded" onChange={handleChange} page={currentPage} count={numberOfPages} color="primary" />
        </Grid>
      </Grid>
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  title: PropTypes.string,
  showImages: PropTypes.bool,
  articlesPerPage: PropTypes.number,
  searchTerm: PropTypes.string,
};

ArticleList.defaultProps = {
  showImages: true,
  articlesPerPage: 3,
}

export default ArticleList;