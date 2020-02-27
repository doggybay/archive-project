import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Grid, MobileStepper, Button, TextField } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  stepper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 2),
    marginTop: 10,
    width: "20rem",
    height: "1rem"
  }
}));

const ArchiveItemDetailsForm = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const { handleChange, state, nextStep, prevStep, step, makeWidget } = props;

  const continueStep = e => {
    e.preventDefault();
    makeWidget();
    nextStep();
  };

  const backStep = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <TextField
              id="serial-number"
              label="Serial Number"
              type="text"
              placeholder="What is the serial number?"
              size="small"
              value={state.serial_num}
              onChange={handleChange("serial_num")}
            />
          </Grid>
          <Grid item>
            <TextField
              id="price"
              label="Item Price"
              type="number"
              placeholder="how much does it cost?"
              size="small"
              value={state.price}
              onChange={handleChange("price")}
            />
          </Grid>
          <Grid item>
            <TextField
              id="description"
              label="Item Description"
              multiline
              rowsMax="4"
              placeholder="Any additional description?"
              size="small"
              value={state.description}
              onChange={handleChange("description")}
            />
          </Grid>
        </Grid>
      </form>
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={step}
        className={classes.stepper}
        nextButton={
          <Button size="small" onClick={continueStep} disabled={step === 5}>
            Next
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

export default ArchiveItemDetailsForm;