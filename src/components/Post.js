import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },

  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://static.photocrowd.com/photos/3045711-91f0b1673f3a0033064961889ae0bfc6c47faa3c-hd.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            Now we end up in the situation where we used many keys twice inside
            our component. Let's assume we got 14 elements inside
            seasonScoresData and 30 in currentRoaster. We have used the numbers
            0-13 two times as a key prop. Now we're not serving the purpose
            anymore to have unique key props. Now we end up in the situation
            where we used many keys twice inside our component. Let's assume we
            got 14 elements inside seasonScoresData and 30 in currentRoaster. We
            have used the numbers 0-13 two times as a key prop. Now we're not
            serving the purpose anymore to have unique key props.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
