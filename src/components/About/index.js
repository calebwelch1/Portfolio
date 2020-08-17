import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconBreadcrumbs from "../IconBreadcrumbs";
import TypingAnimation from "../TypingAnimation";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    backgroundColor: "rgba(127,127,127, 0.5)",
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

export default function About() {
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
            <Typography variant="h4" className={classes.title}>
              ABOUT ME
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            I'm a recent graduate of the UNH Web Development 6 month bootcamp. I
            have a deep love for programming and would love to bring my passion
            to your project or team!
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <h4 className={classes.centered}>Skills</h4>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <p className={classes.paper}>
            Node.Js, Express, JavaScript, jQuery, React.js, React, JSX, GIT,
            GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3,
            Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API,
            ES6+, React Hooks, JSON, Sequelize, Progressive Web Applications,
            Adobe Photoshop, Graphic Design, Web Design, Material UI
          </p>
        </Grid>
        <Grid item xs={3}></Grid>

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
