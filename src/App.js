import { Button, Grid, makeStyles } from "@material-ui/core";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
