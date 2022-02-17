import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import MailIcon from "@mui/icons-material/Mail";
import { InputBase } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.isOpen ? "flex" : "none"),
      width: "60%",
    },
  },

  input: {
    color: "#fff",
    marginLeft: theme.spacing(1),
  },

  icons: {
    alignItems: "center",
    display: (props) => (!props.isOpen ? "flex" : "none"),
  },

  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  badge: {
    marginRight: theme.spacing(2),
  },
}));

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles({ isOpen });
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.logoLg}>
            Crystal Dev
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            Crystal
          </Typography>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase placeholder="search..." className={classes.input} />
            <div className={classes.cancel}>
              <CancelIcon onClick={() => setIsOpen(false)} />
            </div>
          </div>
          <div className={classes.icons}>
            <div className={classes.searchButton}>
              <SearchIcon onClick={() => setIsOpen(true)} />
            </div>

            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <NotificationsIcon />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQhGQ8I2tc4HU2L6luifjs2-2F6_pF9_ONKW169K3EgYdxd0Olz7HltKP0YGBfz"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
