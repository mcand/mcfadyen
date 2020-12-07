import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
  },
  media: {
    height: 0,
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    padding: 0,
  },
  title: {
    marginTop: 0,
  },
  container: {
    padding: 15,
  },
}));