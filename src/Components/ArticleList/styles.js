import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    vertcalAlign: 'center',
  },
  media: {
    height: 140,
  },
  title: {
    margin: 20,
    fontSize: 40,
    textAlign: 'center',
    textDecoration: 'underline',
  },
  pagination: {
    justifyContent: 'center',
    display: 'flex',
    padding: '20px 0',
  },
});