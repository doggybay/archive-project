import { makeStyles } from '@material-ui/core/styles';



export const categoryListStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
    minWidth: theme.spacing(40),
    maxWidth: theme.spacing(40),
    minHeight: theme.spacing(20),

    "&:hover": {
      boxShadow: "-1px 5px 29px 0px rgba(0,0,0,0.5)"
    }
  },
  imgs: {
    height: 130
  },
  action: {
    width: 151,
    height: "auto"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2)
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16)
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(40),
    margin: theme.spacing(1)
  },
  picDialog: {
    maxWidth: theme.spacing(60),
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  icnBtn: {
    marginRight: theme.spacing(.2)
  }
}));

export const archiveItemsListStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
    minWidth: theme.spacing(40),
    maxWidth: theme.spacing(40),
    minHeight: theme.spacing(20),

    "&:hover": {
      boxShadow: "-1px 5px 29px 0px rgba(0,0,0,0.5)"
    }
  },
  imgs: {
    height: 130
  },
  action: {
    width: 151,
    height: "auto"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2)
  },
  media: {
    height: 140,
    maxWidth: theme.spacing(16)
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(40),
    margin: theme.spacing(1)
  },
  picDialog: {
    maxWidth: theme.spacing(60),
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  icnBtn: {
    marginRight: theme.spacing(.2)
  }
}));