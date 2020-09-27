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
import Home from "../Home";

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

export default function About() {
  const classes = useStyles();
  // Grid works by 12 columns. Once you overflow just creates a new row, very interesting
  return (
    <div className={classes.root}>
      <Home />
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
              Resume
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <iframe
            src="https://docs.google.com/document/d/17xpv5YQYiSb0_Qb0W6dcaS9eliDf16AalHpAkZZOeDU/edit?usp=sharing"
            width="100%"
            height="500px"
          ></iframe>
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={12}></Grid>
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
