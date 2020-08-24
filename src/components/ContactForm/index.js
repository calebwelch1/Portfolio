import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
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
    backgroundColor: "rgba(5,5,5, 0.9)",
    boxShadow: "none",
    borderRadius: "5rem",
  },
  linkstyle: {
    color: "skyblue",
  },
}));
export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper elevation={3} className={classes.paper}>
        <p>
          Please contact me at welchce@bc.edu or through linkedin{" "}
          <a
            href="https://www.linkedin.com/in/caleb-welch-502851121/"
            className={classes.linkstyle}
          >
            Here
          </a>
        </p>
        {/* <TextField
          disabled
          id="contact-name"
          label="Name"
          variant="outlined"
          color="white"
        />
        <TextField
          disabled
          id="contact-email"
          label="Email"
          variant="outlined"
        />
        <TextField
          disabled
          id="contact-email"
          label="Message"
          variant="outlined"
        /> */}
      </Paper>
    </form>
  );
}
