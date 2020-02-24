import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/styles";
import { NoSsr, FormGroup, Grid, Select, FormControl, InputLabel } from "@material-ui/core";

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
    "& .MuiTextField-root": {
      margin: theme.spacing(2)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const AddArchiveItemForm = () => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);

  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const inputProps = {
    step: 300
  };

  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <TextField
              id="outlined-password-input"
              label="Make"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-search"
              label="Model"
              type="search"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Category
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange("age")}
                labelWidth={labelWidth}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple"
                }}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default AddArchiveItemForm;
