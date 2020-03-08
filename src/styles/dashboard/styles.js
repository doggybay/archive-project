import { makeStyles } from '@material-ui/core/styles';



export const dashboardStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 250
  },
  margin: {
    marginTop: theme.spacing(2)
  },
  price: {
    margin: theme.spacing(7, 7),
    fontSize: "3rem",
    color: "#4caf50"
  }
}));