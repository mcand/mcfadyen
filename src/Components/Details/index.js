import React, {useEffect, useState} from 'react';
import ArticleService from '../../Services/ArticleService';
import {
  useParams,
} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import * as moment from 'moment'
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';

const Details = () => {
  const classes = useStyles();
  let { id } = useParams();
  const [article, setArticle] = useState(
    {pub_date: '', byline: {original: ''}, multimedia: [{url: ''}], headline: {main: ''}})

  useEffect(() => {
    ArticleService.getArticleById(id)
      .then(res => {
        setArticle(res.data.response.docs[0])
      })
  }, [])

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.headline.main}
        subheader={moment(article.pub_date).format('LL')}
      />
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardMedia
          className={classes.media}
          image={`https://www.nytimes.com/${article.multimedia[0].url}`}
          title="Paella dish"
          />
        </Grid>
        <Grid item md={6}>
        <CardContent className={classes.cardContent}>
        <h3 className={classes.title}>Abstract</h3>
        <p> {article.abstract}</p>
        <h3>
          {article.lead_paragraph}
        </h3>
        {article.byline.original}
      </CardContent>
        </Grid>
      </Grid> 
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Details;