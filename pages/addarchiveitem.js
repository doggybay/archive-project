import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Box, Paper, Grid, MobileStepper, Button,  } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import ArchiveItemBasicForm from '../src/components/forms/archive-item/ArchiveItemBasicForm';
import ArchiveItemDetailsForm from '../src/components/forms/archive-item/ArchiveItemDetailsForm';
import ArchiveItemPicturesForm from '../src/components/forms/archive-item/ArchiveItemPicturesForm';
import AddArchiveItemConfirm from '../src/components/forms/archive-item/AddArchiveItemConfirm';
import AddArchiveItemSuccess from '../src/components/forms/archive-item/AddArchiveItemSuccess';

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
    padding: theme.spacing(2),
    width: "auto",
    marginTop: theme.spacing(2),
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

  const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dnrmrcpbi",
        uploadPreset: "archivePictures",
        sources: ["local", "camera"],
        multiple: false,
        styles: {
          palette: {
            window: "#F5F5F5",
            sourceBg: "#FFFFFF",
            windowBorder: "#90a0b3",
            tabIcon: "#0094c7",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0094C7",
            link: "#53ad9d",
            action: "#8F5DA5",
            inProgress: "#0194c7",
            complete: "#53ad9d",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF"
          }
        }
      },
      (error, result) => {
        if (result.event === "close") {
          console.log("cloudinary widget closed");
        } else if (result.event === "success") {
          console.log("results in widget: ", result.info);
          setState({
            ...state,
            pictures: [...state.pictures, result.info.secure_url]
          });
          widget.close();
        }
      }
    )
  

  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    make: "",
    model: "",
    type_id: "",
    serial_num: "",
    price: 0,
    description: "",
    pictures: []
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value
    });
  };

  const handleSubmit = () => {
    
    console.log('heard', state)
    nextStep()
  }

  const removePic = (pic) => {
    state.pictures.splice(pic, 1);
    setState({
      ...state,
          pictures: [...state.pictures]
    })
  }

  

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

                <ArchiveItemBasicForm
                  handleChange={handleChange}
                  state={state}
                  step={step}
                  nextStep={nextStep}
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
                  Additional Item Details
                </Typography>

                <ArchiveItemDetailsForm
                  handleChange={handleChange}
                  state={state}
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
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
                  Add Some Pictures
                </Typography>

                <ArchiveItemPicturesForm
                  widget={widget}
                  state={state}
                  removePic={removePic}
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
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
                  Confirm
                </Typography>

                <AddArchiveItemConfirm
                  state={state}
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
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
                  Success
                </Typography>

                <AddArchiveItemSuccess />

              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      );
  }
}

export default AddArchiveItem;