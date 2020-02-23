import React, { Fragment, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Box, Paper, Grid, MobileStepper, Button } from '@material-ui/core';
import AddArchiveItemForm from '../src/components/forms/AddArchiveItemForm';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1)
    },
    alignItems: "center"
  },
  heading: {},
  paper: {
    padding: theme.spacing(3, 2),
    width: "auto"
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


const AddArchiveItem = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <Fragment>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={4} className={classes.paper}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  What are we adding?
                </Typography>

                <AddArchiveItemForm />
                <MobileStepper
                  variant="progress"
                  steps={6}
                  position="static"
                  activeStep={step}
                  className={classes.stepper}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 6}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={4} className={classes.paper}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  More info 1
                </Typography>

                <AddArchiveItemForm />
                <MobileStepper
                  variant="progress"
                  steps={6}
                  position="static"
                  activeStep={step}
                  className={classes.stepper}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 6}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={4} className={classes.paper}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  More info 2
                </Typography>

                <AddArchiveItemForm />
                <MobileStepper
                  variant="progress"
                  steps={6}
                  position="static"
                  activeStep={step}
                  className={classes.stepper}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 6}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
    case 4:
      return (
        <Fragment>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={4} className={classes.paper}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  Pictures
                </Typography>

                <AddArchiveItemForm />
                <MobileStepper
                  variant="progress"
                  steps={6}
                  position="static"
                  activeStep={step}
                  className={classes.stepper}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 6}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
    case 5:
      return (
        <Fragment>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={4} className={classes.paper}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  Confirm before submit
                </Typography>

                <AddArchiveItemForm />
                <MobileStepper
                  variant="progress"
                  steps={6}
                  position="static"
                  activeStep={step}
                  className={classes.stepper}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 6}
                    >
                      Submit
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
  }
}

export default AddArchiveItem;