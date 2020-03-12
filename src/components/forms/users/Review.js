import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';


const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));



const Review = ({ state, insName, insPhone }) => {
  const classes = useStyles();

  console.log("review: ", state)

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Review your details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Personal information
          </Typography>
          <Typography
            gutterBottom
          >{`${state.first_name} ${state.last_name}`}</Typography>
          <Typography
            gutterBottom
          >{`${state.st_address}, ${state.opt_address}, ${state.city}, ${state.state}, ${state.zip_code} `}</Typography>
          <Typography
            gutterBottom
          >{`${state.email}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Insurance details
          </Typography>
          <Grid container>
            <Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{insName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{insPhone}</Typography>
              </Grid>
            </Fragment>
            <Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {state.user_insurances.policy_type}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {state.user_insurances.policy_num}
                </Typography>
              </Grid>
            </Fragment>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Review;