import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
// import { AddAlarm } from "@material-ui/icons";
import AddIcon from "@mui/icons-material/Add";
// import { Alert } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },

  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },

  form: {
    padding: theme.spacing(2),
  },

  item: {
    marginBottom: theme.spacing(3),
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setIsOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={isOpen}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standart-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standart-basic"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                defaultValue="Write somethings ..."
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Privare</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                component="legend"
              >
                Who can comment
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My friends"
                  control={<Radio size="small" />}
                  label="My friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                onClick={() => setIsOpenAlert(true)}
                variant="outlined"
                color="primary"
                style={{ marginRight: "1rem" }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={isOpenAlert}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
