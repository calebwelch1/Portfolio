import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconBreadcrumbs from "../IconBreadcrumbs";
import TypingAnimation from "../TypingAnimation";

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
}));

export default function CenteredGrid() {
  const classes = useStyles();
  // Grid works by 12 columns. Once you overflow just creates a new row, very interesting
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}>
          <IconBreadcrumbs />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.centered}>Caleb Welch</h1>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>xs=12</p>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TypingAnimation />
          </Paper>
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
