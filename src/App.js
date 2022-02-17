import { Button, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button} size="large">
        Material ui
      </Button>
      <NavBar />
    </div>
  );
}

export default App;
