import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Button, GridListTile, GridList, GridListTileBar, IconButton, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.secondary.light
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

const ArchiveItemPicturesForm = ({ widget, state, removePic, step, nextStep, prevStep }) => {

  const classes = useStyles();
  const theme = useTheme();

  const widgetOpen = () => {
    widget.open();
  }; 

  const pictureList = state.pictures.map((pic, i) => (
    <GridListTile key={i}>
      <img src={pic} />
      <GridListTileBar
        actionIcon={
          <IconButton
            aria-label={`Archive item picture ${i}`}
            className={classes.icon}
            onClick={() => removePic(i)}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </GridListTile>
  ));
  
  const continueStep = e => {
    e.preventDefault();
    nextStep();
  };

  const backStep = e => {
    e.preventDefault();
    prevStep();
  };
  
  return (
    <Fragment>
      <Button
        onClick={() => widgetOpen()}
        variant="contained"
        color="secondary"
      >
        Add Pictures
      </Button>

      <GridList>{pictureList}</GridList>

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

export default ArchiveItemPicturesForm;