import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemText, GridListTile, GridList, MobileStepper, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  stepper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 2),
    marginTop: 10,
    width: "20rem",
    height: "1rem"
  }
}));

const AddArchiveItemConfirm = ({ state, nextStep, prevStep, handleSubmit, step }) => {
  const classes = useStyles();
  const theme = useTheme();
  

  const { make, model, type_id, serial_num, price, description, pictures } = state;
  const types = useSelector(state => state.types.all);
  const type = types.filter(type => type.id !== type_id)

  const pictureList = pictures.map((pic, i) => (
    <GridListTile key={i}>
      <img src={pic} />
    </GridListTile>
  ));

  const continueStep = e => {
    e.preventDefault();
    handleSubmit(e);
    
  };

  const backStep = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Fragment>
      <List>
        <ListItem>
          <ListItemText primary="Item Make" secondary={make} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item Model" secondary={model} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item Categoty" secondary={type.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item Serial Number" secondary={serial_num} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item Price" secondary={price} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item Description" secondary={description} />
        </ListItem>
      </List>
      <GridList>{pictureList}</GridList>
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={step}
        className={classes.stepper}
        nextButton={
          <Button size="small" onClick={continueStep} disabled={step === 5}>
            Submit
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={backStep} disabled={step === 1}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Fragment>
  );
}

export default AddArchiveItemConfirm;