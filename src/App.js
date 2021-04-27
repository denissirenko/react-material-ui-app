import React from "react";

import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RestoreIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((them) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: them.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: them.palette.common.white,
    marginBottom: them.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: them.spacing(6),
    marginTop: them.spacing(5)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: them.spacing(4),
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState('recents');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>
              React-Material-App
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
                Log in
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id="form-dialog-title">
                  log in
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Log in
                    <TextField 
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Adress"
                      type="email"
                      fullWidth
                    />
                    <TextField 
                      autoFocus
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </DialogContentText>
                  <DialogActions>
                    <button onClick={handleClose} color="primary">
                      Cancel
                    </button>
                    <button onClick={handleClose} color="primary">
                      Log in
                    </button>
                  </DialogActions>
                </DialogContent>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper className={classes.mainFeaturesPost} 
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    variant="h2"
                    color="inherit"
                    gutterBottom
                  >
                    React-Material-App
                  </Typography>
                  <Typography
                    component="p"
                    color="inherit"
                    paragraph
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam exercitationem tenetur distinctio vel rerum quia quas, labore repellat harum, consectetur incidunt. Ducimus, qui nobis!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              React-Material-App
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia veritatis nihil, tempore, dolorum temporibus quibusdam unde maiores consequuntur magnam omnis, nisi iure accusamus. Id ad quisquam aperiam delectus fugiat nisi repudiandae enim quidem corrupti!
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="h5"
                      gutterBottom
                    >
                      Blog post
                    </Typography>
                    <Typography
                    >
                      Blog text
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayersIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation 
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction 
            label="Recents"
            value="recents"
            icon={<RestoreIcon/>}
          />
          <BottomNavigationAction 
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}
          />
          <BottomNavigationAction 
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon/>}
          />
          <BottomNavigationAction 
            label="Folder"
            value="folder"
            icon={<FolderIcon/>}
          />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
          React-Material-App
        </Typography>
      </footer>
    </>
  );
}

export default App;
