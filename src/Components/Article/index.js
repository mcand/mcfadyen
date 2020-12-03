import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const Article = ({title, imageUrl, abstract, shouldShowImage}) => {
  const classes = useStyles();

  return (
    <Grid item lg={3}>
      <Card className={classes.root}>
        <CardActionArea>
          {shouldShowImage && <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {abstract}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
  
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  abstract: PropTypes.string.isRequired,
  shouldShowImage: PropTypes.bool,
}

Article.defaultProps = {
  shouldShowImage: true,
}

export default Article;