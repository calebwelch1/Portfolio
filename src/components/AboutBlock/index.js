import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./index.css";
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
    backgroundColor: "rgba(5,5,5, 0.9)",
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
    color: "#333",
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
  text: {
    textAlign: "center",
    padding: theme.spacing(1),
  },
}));

export default function About() {
  const classes = useStyles();
  // Grid works by 12 columns. Once you overflow just creates a new row, very interesting
  return (
    <div class="textBackground">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.title}>
              ABOUT ME
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6} className={classes.text}>
          Just a year ago I would never have believed I would be where I am now.
          After the accident my whole life was thrown into turmoil. The injury
          and resulting surgeries meant I would be out of commission for awhile,
          which meant saying goodbye to grad school and my coveted post as a
          research assistant. Walking was excruciating for the first few months
          so the vast city I had once known now shrunk to the few square feet of
          a hospital ward and later my apartment. Not to mention the seemingly
          endless onslaught of well meant, but still painful needles poking into
          my shoulders and forearms at all hours of the day and night. I had a
          lot of time while I recovered, to reflect and read and humble myself.
          I read an amazing book by David Goggins Navy Seal and certified Badass
          called "Can't Hurt Me". Through his words I came to see the accident
          not as a catastrophe but a blessing. A divine intervention. The events
          that lay us lowest in life are also the best training grounds to build
          ourselves to greatness. So I decided to buy the book Learning Python
          the Hard Way and set out to finally learning to code. It's been
          challenging, frustrating at times and rewarding at others, but
          learning to code saved me. The horrifyingly complex and beautiful
          world of computer science had opened itself up to me and gave me a
          reason to keep moving forward. Since then I haven't stopped
          programming, building and learning. I've mastered a few technologies
          since then and I'm excited for the difficulty that lies in learning
          the rest of them! My journey has taken longer than expected but it is
          far from over, and I'm looking forward to all the future brings. If
          you would like to contact me please feel free to reach out via
          linkedin or email.
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6} className={classes.text}>
          Technologies
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6} className={classes.text}>
          Node.Js, Express, JavaScript, jQuery, Python, React.js, React, JSX,
          GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3,
          Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API,
          ES6+, React Hooks, JSON, Sequelize, Progressive Web Applications,
          Adobe Photoshop, Graphic Design, Web Design, Material UI
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
