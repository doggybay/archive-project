import { makeStyles } from '@material-ui/core/styles';

export const pictureListStyles = makeStyles(theme => ({
  cards: {
    width: theme.spacing(20),
    marginTop: theme.spacing(2),
    minHeight: theme.spacing(20)
  },
  grid: {
    display: "flex",
    justifyContent: "space-around",
    width: "400px"
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  }
}));