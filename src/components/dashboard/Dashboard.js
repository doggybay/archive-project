import React, { useState } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Grid, Container, ListItem, ListItemText, List, Divider, Typography } from '@material-ui/core';
import { dashboardStyles } from '../../styles/dashboard/styles'
import Link from '../../Link';


const Dashboard = () => {
  const classes = dashboardStyles();
  const user = useSelector(state => state.users.oneUser)
  const types = useSelector(state => state.types.all)
  const userArchive = user.hasOwnProperty("id") ? user.archive_items : [];
  const userInsurance = user && user.hasOwnProperty("id") ? user.user_insurances : [];

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const archiveLength = userArchive.length

  // list of category links
  const catsNLength = []
  const catsWithLength = {};
    
  for (let i = 0; i < userArchive.length; i++) {
    
    if (catsWithLength[userArchive[i].types.name]) {
      catsWithLength[userArchive[i].types.name]++
    } else {
      catsWithLength[userArchive[i].types.name] = 1
      
      
    }
    catsNLength.push(catsWithLength)
  }

  const listOfLinks = []

  for (const key in catsNLength[0]) {
    for (let i = 0; i < types.length; i++){
      if (types[i].name === key) {
        const name = key;
        const formattedName = key[0].toUpperCase() + key.slice(1)

        
        
        
        listOfLinks.push(
          <ListItem
            key={key}
            button
            component={Link}
            href={`/myarchive/categorys?type=${types[i].id}`}
            as={`/myarchive/${name}`}
          >
            <ListItemText primary={`${catsNLength[0][key]} ${formattedName}`} />
          </ListItem>
        );
      }
    }
  }

  // calculating total price
  let totalPrice = 0;

  for (let i = 0; i < userArchive.length; i++) {
    totalPrice += userArchive[i].price;
  }

  const formattedPrice = totalPrice.toLocaleString()
  

  const formattedPolType = userInsurance.hasOwnProperty("id")
    ? userInsurance.policy_type[0].toUpperCase() +
      userInsurance.policy_type.slice(1)
    : "";
  
  const insComp = userInsurance.hasOwnProperty("id") ? userInsurance.insurance_companys : {};

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h3"
                color="primary"
                gutterBottom
              >
                My Archive
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  {archiveLength} Items
                </Typography>

                <Divider />
                <List>{listOfLinks}</List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  Total Value
                </Typography>
                <Divider />
                <Typography className={classes.price} component="p" variant="h4">
                  ${formattedPrice}
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  Insurance Information
                </Typography>
                <Divider />
                <Typography className={classes.margin} component="p" variant="h4">
                  {insComp.name}
                </Typography>
                <Typography className={classes.margin} component="p" variant="h6">
                  Policy #: {userInsurance.policy_num}
                </Typography>
                <Typography component="p" variant="h6">
                  Policy Type: {formattedPolType}
                </Typography>
                <Typography component="p" variant="h6">
                  Claims #: {insComp.phone}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard