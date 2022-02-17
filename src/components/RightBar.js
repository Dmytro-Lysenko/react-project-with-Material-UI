import { Button, Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function RightBAr() {
  const classes = useStyles();
  return <Container className={classes.container}>R=ight</Container>;
}

export default RightBAr;
