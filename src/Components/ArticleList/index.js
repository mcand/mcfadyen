import React from 'react';
import Article from '../Article';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';

const ArticleList = ({title, articles, showImages }) => {
  const classes = useStyles();

  const getArticle = (article, index) => {
    return (
      <Article 
        key={index}
        title={article.title}
        abstract={article.abstract}
        shouldShowImage={showImages}
        imageUrl={article.media[0] && article.media[0]['media-metadata'][2]['url']} 
      />
    );
  }
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <Grid container spacing={0}>
        {
          articles.map((article, index) => getArticle(article, index))
        } 
      </Grid>
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  title: PropTypes.string,
  showImages: PropTypes.bool,
};

ArticleList.defaultProps = {
  showImages: true,
}

export default ArticleList;