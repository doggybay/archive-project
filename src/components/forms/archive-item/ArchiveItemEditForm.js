import React, { useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { Container, Paper, Typography, Grid, Card, CardMedia, List, ListItem, ListItemText, TextField, FormControl, InputLabel, Select, MenuItem, NativeSelect, FilledInput, InputAdornment, Input, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';




const staticArchiveItem = () => ({
  id: 60,
  user_id: 1,
  type_id: 4,
  make: "Emoltra",
  model: "",
  serial_num: "39114",
  price: 4129,
  description:
    "Commodo laboris labore nostrud do exercitation sint Lorem veniam qui voluptate ipsum. Ea aliqua eiusmod duis mollit nulla excepteur dolor anim. Incididunt exercitation culpa in proident sit.\r\n",
  types: {
    id: 4,
    name: "furniture"
  },
  pictures: [
    {
      id: 75,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=20"
    },
    {
      id: 103,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=180"
    },
    {
      id: 103,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=280"
    },
    {
      id: 103,
      archive_item_id: 60,
      pic: "https://picsum.photos/200/300?random=80"
    }
  ]
});

const useStyles = makeStyles(theme => ({
  cards: {
    width: theme.spacing(16),
    margin: theme.spacing(2)
  },
  grid: {},
  media: {
    height: 140,
    maxWidth: theme.spacing(16)
  },
  paper: {
    width: "auto",
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(45)
    }
  },
  picGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  gridItem: {
    minWidth: theme.spacing(45)
  },
  detailsPaper: {
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(30)
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(45)
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(45)
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(90)
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(90)
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(90)
    },

    margin: theme.spacing(1)
  },
  detailsTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  typeSelect: {
    margin: theme.spacing(1),
    minWidth: 180
  },
  price: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(65)
    },
    marginRight: theme.spacing(20)
  },
  description: {
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(30)
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(45)
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(45)
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(80)
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(90)
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(90)
    },
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  serialNum: {
    marginLeft: theme.spacing(1)
  },
  margin: {
    marginLeft: theme.spacing(1)
  },
  sbmBtn: {
    backgroundColor: theme.palette.success.main,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    color: "#fff"
  },
  backBtn: {
    backgroundColor: theme.palette.error.main,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    color: "#fff"
  },
  picBtn: {
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    color: "#fff"
  },
  icon: {
    color: theme.palette.error.main
  }
}));

// Begin component

const ArchiveItemEditForm = ({ state, setState, handleChange, widget, pictures, removePic, handleSubmit }) => {
  const hcai = staticArchiveItem();
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const inputLabel = useRef(null);
  
  // Store state
  const data = useSelector(state => state.archiveItems.oneArchiveItem);
  const types = useSelector(state => state.types.all);

  const archiveItem = data.hasOwnProperty('id') ? data : hcai;

  const localPictures = pictures ? pictures : hcai.pictures;
  const type = archiveItem.types.name

  // Local state
  const [labelWidth, setLabelWidth] = useState(0);
  const [pics, setPics] = useState([])

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // Methods
  const openWidget = () => {
    widget.open();
  }

  const handleBack = () => {
    router.back()
  }

  // Lists
  const listOfPics = localPictures.map((picture, i) => {
    
    return (
      <Grid item>
        <Card key={i} className={classes.cards} style={{}}>
          <CardMedia
            className={classes.media}
            image={picture.pic}
            title={`A ${archiveItem.make} ${archiveItem.model}`}
          >
            <IconButton
              aria-label="delete archive picture"
              className={classes.icon}
              onClick={() => removePic(i)}
            >
              <DeleteIcon />
            </IconButton>
          </CardMedia>
        </Card>
      </Grid>
    );
  })
  console.log('array of pics in form: ', pictures)

  const listOfTypes = types.map(type => {
    return (
      <option key={type.id} value={type.id}>
        {type.name}
      </option>
    );
  });



  return (
    <Grid
      container
      spacing={3}
      justify="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Paper elevation={4} className={classes.paper}>
        <Grid container className={classes.picGrid}>
          {listOfPics}
        </Grid>
      </Paper>
      <Paper elevation={4} className={classes.detailsPaper}>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <List>
            <ListItem>
              <TextField
                id="make"
                label="Update Make"
                type="text"
                size="small"
                defaultValue={archiveItem.make}
                onChange={handleChange("make")}
                className={classes.margin}
              />
            </ListItem>

            <ListItem>
              <TextField
                id="model"
                label="Update Model"
                type="text"
                size="small"
                defaultValue={archiveItem.model}
                onChange={handleChange("model")}
                className={classes.margin}
              />
            </ListItem>
            <ListItem>
              <FormControl className={classes.typeSelect}>
                <InputLabel ref={inputLabel} htmlFor="type-select">
                  Update Category
                </InputLabel>
                <Select
                  native
                  defaultValue={"type"}
                  onChange={handleChange("type_id")}
                  labelWidth={labelWidth}
                >
                  <option value="" disabled>
                    {type}
                  </option>

                  {listOfTypes}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <TextField
                id="serial-number"
                label="Update Serial Number"
                type="text"
                placeholder="serial number"
                size="small"
                defaultValue={archiveItem.serial_num}
                onChange={handleChange("serial_num")}
                className={classes.serialNum}
              />
            </ListItem>
            <FormControl className={classes.price}>
              <InputLabel htmlFor="price">Update Price</InputLabel>
              <Input
                id="price"
                defaultValue={archiveItem.price}
                onChange={handleChange("price")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <ListItem>
              <FormControl className={classes.description}>
                <InputLabel htmlFor="description">
                  Update Description
                </InputLabel>
                <Input
                  id="description"
                  multiline
                  defaultValue={archiveItem.description}
                  onChange={handleChange("description")}
                  size="small"
                  rowsMax="4"
                />
              </FormControl>
            </ListItem>
          </List>
        </Grid>
        <Button
          variant="contained"
          onClick={handleBack}
          className={classes.backBtn}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={localPictures.length < 4 ? false : true}
          onClick={openWidget}
          className={classes.picBtn}
        >
          Update Pictures
        </Button>
        <Button
          variant="contained"
          disabled={localPictures.length < 1 ? true : false}
          className={classes.sbmBtn}
          onClick={handleSubmit}

        >
          Make Changes
        </Button>
      </Paper>
    </Grid>
  );
};


export default ArchiveItemEditForm;

