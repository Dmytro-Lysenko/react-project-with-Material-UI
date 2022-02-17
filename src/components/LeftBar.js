import { Container, makeStyles, Typography } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ListIcon from "@mui/icons-material/List";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

// import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#ffffff",
      color: "#555",
      border: "1px solid #999",
    },
  },

  item: {
    display: "flex",
    alighnItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("xs")]: {
      marginBottom: theme.spacing(4),
      cursor: "pointer",
    },
  },

  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2rem",
    },
  },

  text: {
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />

        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PeopleAltIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <VideocamIcon className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.item}>
        <AppSettingsAltIcon className={classes.icon} />
        <Typography className={classes.text}>App</Typography>
      </div>
      <div className={classes.item}>
        <CollectionsIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>MarketPlace</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>LogOut</Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
