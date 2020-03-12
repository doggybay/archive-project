import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const InsuranceDetailsForm = ({ state, setState, insPhone, setInsPhone, setInsName }) => {
  const insuranceCompanys = useSelector(state => state.insuranceCompanys.all);

  const handleChange = name => e => {
    setState({
      ...state,
      user_insurances: {
        ...state.user_insurances,
        [name]: e.target.value
      }
    });
    insuranceCompanys.forEach(insComp => {
      if (insComp.id === e.target.value) {
        setInsPhone(insComp.phone)
        setInsName(insComp.name)
      }
    })
  };

  
    console.log("ins form: ", state)
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Insurance details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            onChange={handleChange("insurance_company_id")}
            fullWidth
          >
            {insuranceCompanys.map(option => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            disabled
            id="insPhone"
            label="Insurance Phone Number"
            value={insPhone}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="policyType"
            label="Policy type"
            helperText="Homeowners/Renters/Condo/etc"
            fullWidth
            value={state.user_insurances.policy_type}
            onChange={handleChange("policy_type")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="policyNum"
            label="Policy number"
            fullWidth
            value={state.user_insurances.policy_num}
            onChange={handleChange("policy_num")}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Fragment>
  );
};

export default InsuranceDetailsForm;
