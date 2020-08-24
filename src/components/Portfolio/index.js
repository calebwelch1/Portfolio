import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import GRPortfolio from "../GRPortfolio";
import Screenshot from "../../assets/GRScreenshot.png";
import GSSCScreenshot from "../../assets/gsscscreen.png";

import GitHubIcon from "@material-ui/icons/GitHub";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "5rem",
  },
  centered: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: "white",
    height: "100%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(1),
    color: "white",
    height: "100%",
    fontWeight: "strong",
    textShadow: "2px 2px #000",
  },
  typist: {
    textAlign: "top",
    padding: theme.spacing(1),
    color: "white",
    height: "100%",
    fontWeight: "strong",
    textShadow: "2px 2px #000",
    position: "top",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  // Grid works by 12 columns. Once you overflow just creates a new row, very interesting
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.title}>
              PORTFOLIO
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
              Gamer Evolution
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <a
            href="https://fatidique-moliere-24500.herokuapp.com/index.html"
            target="_blank"
          >
            <img
              class="img-fluid mb-3 mb-lg-0"
              id="project-image-ge"
              src={Screenshot}
              alt="gamerrevolution"
            />
          </a>
          <Paper className={classes.paper}>
            A videogame aggregator and social media website designed to evolve
            the gaming social scene.
          </Paper>
          <Paper className={classes.paper}>
            <a
              href="https://github.com/MariaKhantech/gamerevolution"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
              GSSC Image Gallery
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <a
            href="https://calebwelch1.github.io/Image-Gallery-App"
            target="_blank"
          >
            <img
              class="img-fluid mb-3 mb-lg-0"
              id="project-image-ge"
              src={GSSCScreenshot}
              alt="gamerrevolution"
            />
          </a>
          <Paper className={classes.paper}>
            A Pinterest-like image gallery utilizing the GIPHY and Unsplash
            API's. Search, share, and like gifs and images!
          </Paper>
          <Paper className={classes.paper}>
            <a
              href="https://github.com/MariaKhantech/gamerevolution"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>x</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>x</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>x</p>
        </Grid>
      </Grid>
    </div>
  );
}
