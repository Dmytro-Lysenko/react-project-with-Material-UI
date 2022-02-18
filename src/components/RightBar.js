import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },

  title: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#555",
  },

  link: {
    marginRight: theme.spacing(2),
    fontSize: "1rem",
    color: "#555",
  },
}));

function RightBAr() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online friends
      </Typography>
      <AvatarGroup max={5} style={{ marginBottom: "2rem" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com//static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="h
          ttps://mui.com//static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com//static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com//static/images/avatar/7.jpg"
        />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>

      <ImageList
        style={{ marginBottom: "2rem" }}
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={100}
        col={2}
      >
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>

      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>

      <Link href="#" variant="body2" className={classes.link}>
        Sport
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Food
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Movies
      </Link>
      <Divider flexItem style={{ marginBottom: "0.5rem" }} />
      <Link href="#" variant="body2" className={classes.link}>
        Science
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Music
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Live
      </Link>
    </Container>
  );
}

export default RightBAr;
