import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MobileStepper,
  Button
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
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

// Begin component

const DetailsForm = props => {
  const classes = useStyles();
  const theme = useTheme();

  const inputLabel = React.useRef(null);

  const types = useSelector(state => state.types.all);

  // const [state, setState] = React.useState({
  //   type: "",
  //   name: "hai"
  // });

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const { handleChange, state, step, nextStep } = props;

  const continueStep = e => {
    e.preventDefault();
    nextStep();
  };

  const listOfTypes = types.map(type => {
    return (
      <option key={type.id} value={type.id}>
        {type.name}
      </option>
    );
  });

  return (
    <Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <TextField
            id="make"
            label="Make"
            type="text"
            placeholder="Who makes your item?"
            size="small"
            value={state.make}
            onChange={handleChange("make")}
          />
        </Grid>
        <Grid item>
          <TextField
            id="model"
            label="Model"
            type="text"
            placeholder="What model is your item?"
            size="small"
            value={state.model}
            onChange={handleChange("model")}
          />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="type-select">
              Category
            </InputLabel>
            <Select
              native
              value={state.type}
              onChange={handleChange("type_id")}
              labelWidth={labelWidth}
            >
              <option value="" />

              {listOfTypes}
            </Select>
          </FormControl>
        </Grid>

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
    </Fragment>
  );
};

export default DetailsForm;
