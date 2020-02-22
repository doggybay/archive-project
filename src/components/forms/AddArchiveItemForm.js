import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import { NoSsr } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: red;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const AddArchiveItemForm = () => {

  const classes = useStyles();

  const inputProps = {
    step: 300,
  };

  return (
    <Fragment>

    <form className={classes.root} noValidate autoComplete="off">
      
      
      <div>
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          />
      
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        
      </div>

      <TextField id="time" type="time" inputProps={inputProps} />

      

      </form>
      

    </Fragment>
  )
}


export default AddArchiveItemForm;