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
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.title}>
              ABOUT ME
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.title}>
            I'm a recent graduate of the UNH Web Development 6 month bootcamp. I
            have a deep love for programming and would love to bring my passion
            to your project or team!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {" "}
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
      </Grid>
    </div>
  );
}
