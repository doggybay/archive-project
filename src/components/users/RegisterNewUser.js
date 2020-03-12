import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import AddressForm from '../forms/users/AddressForm';
import InsuranceDetailsForm from '../forms/users/InsuranceDetailsForm'
import Review from '../forms/users/Review';
import { fetchAllInsuranceCompanys } from '../../store/insurance-companys/actionCreators'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Personal information', 'Insurance details', 'Review your information'];

function getStepContent(step, state, setState, insPhone, setInsPhone, insName, setInsName) {
  switch (step) {
    case 0:
      return <AddressForm state={state} setState={setState} />;
    case 1:
      return <InsuranceDetailsForm state={state} setState={setState} insPhone={insPhone} setInsPhone={setInsPhone} setInsName={setInsName} />;
    case 2:
      return <Review state={state} insPhone={insPhone} insName={insName} />;
    default:
      throw new Error('Unknown step');
  }
}

const RegisterNewUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllInsuranceCompanys());
  }, [])

  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone: "(  )    -    ",
    st_address: "",
    opt_address: "",
    city: "",
    state: "",
    zip_code: "",
      
    user_insurances: {
      insurance_company_id: "",
      policy_num: "",
      policy_type: ""
    }
  });
  const [insPhone, setInsPhone] = useState("");
  const [insName, setInsName] = useState("");
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log('heard')
    } else {
      setActiveStep(activeStep + 1);
    }
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  
  return (
    <Fragment>
      
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
            {activeStep === steps.length ? (
              <Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                {getStepContent(activeStep, state, setState, insPhone, setInsPhone, insName, setInsName)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>

      </main>
    </Fragment>
  );
}

export default RegisterNewUser;