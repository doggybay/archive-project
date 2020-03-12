import React, { Fragment, useState } from 'react';
import { Grid, Typography, TextField, FormControl, Input, InputLabel } from '@material-ui/core';

import PhoneNumInput from '../../utils/PhoneNumInput'


const AddressForm = ({ state, setState}) => {
  
  const handleChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value
    });
  };

  const handleAddress = name => e => {
    setState({
      ...state,
      addresses: [
        {
          ...state.addressess[0],
          [name]: e.target.value
        }
      ]
    });
  };

  console.log("address: ", state)
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value={state.first_name}
            onChange={handleChange("first_name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={state.last_name}
            onChange={handleChange("last_name")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            helperText="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            value={state.st_address}
            onChange={handleChange("st_address")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            helperText="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            value={state.opt_address}
            onChange={handleChange("opt_address")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            helperText="City"
            fullWidth
            autoComplete="billing address-level2"
            value={state.city}
            onChange={handleChange("city")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            helperText="State"
            fullWidth
            value={state.state}
            onChange={handleChange("state")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="zip">Zip Code</InputLabel>
            <Input
              required
              id="zip"
              name="zip"
              type="number"
              autoComplete="billing postal-code"
              value={state.zip_code}
              onChange={handleChange("zip_code")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="phone">Phone number</InputLabel>
            <Input
              value={state.phone}
              onChange={handleChange("phone")}
              id="phone"
              inputComponent={PhoneNumInput}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            helperText="Email address"
            fullWidth
            autoComplete="email"
            value={state.email}
            onChange={handleChange("email")}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AddressForm;
