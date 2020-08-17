import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TypingAnimation from "../TypingAnimation";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AttachFileIcon from "@material-ui/icons/AttachFile";

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
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.title}>
              Caleb Welch
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.typist}>
            <Paper className={classes.paper}>
              <TypingAnimation />
            </Paper>
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <a target="_blank" href="https://github.com/calebwelch1">
              <GitHubIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/caleb-welch-502851121/"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/calebwelch.design/"
            >
              <InstagramIcon />
            </a>
            <a href="/resume">
              <AttachFileIcon />
            </a>
          </Paper>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
      </Grid>
    </div>
  );
}
