import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { Link } from 'react-router-dom'
const Article = ({id, title, imageUrl, abstract, shouldShowImage}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4}>
      <Link className={classes.link} to={`/details/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            {shouldShowImage && <CardMedia
              className={classes.media}
              image={imageUrl}
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
      </Link>
    </Grid>
  );
  
}

Article.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  abstract: PropTypes.string.isRequired,
  shouldShowImage: PropTypes.bool,
}

Article.defaultProps = {
  shouldShowImage: true,
}

export default Article;