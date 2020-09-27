import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import HomePage from "./components/HomePage";

// trying to add breadcrumbs
import { makeStyles } from "@material-ui/core/styles";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  linkstyle: {
    display: "center",
    textAlign: "center",
    color: "white",
    paddingRight: theme.spacing(1.5),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  centered: {
    textAlign: "center",
    color: "white",
    marginRight: theme.spacing(5.0),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function App() {
  const classes = useStyles();
  // for some reason if i leave onClick={handleClick} the links won't work
  return (
    // <body className="background">
    <body>
      <Router>
        {/* Navbar for every page */}
        <div className="background">
          <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
            <Grid item xs={4}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator=" "
                className={classes.centered}
              >
                <Link color="inherit" to="/" className={classes.linkstyle}>
                  <HomeIcon className={classes.icon} />
                  Home
                </Link>
                {/* <Link to="/about" className={classes.linkstyle}>
                  <AccountBoxIcon className={classes.icon} />
                  About Me
                </Link> */}
                <Link to="/projects" className={classes.linkstyle}>
                  <FolderIcon className={classes.icon} />
                  Portfolio
                </Link>
                {/* <Link to="/contact" className={classes.linkstyle}>
                  <MailIcon className={classes.icon} />
                  Contact
                </Link> */}
                <Link to="/resume" className={classes.linkstyle}>
                  <AttachFileIcon className={classes.icon} />
                  Resume
                </Link>
              </Breadcrumbs>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
        </div>
        {/* !!!!!!!!! Switch is like an or statement. If it matches the first "/" it won't render anything else. That's why we use exact */}
        <Switch>
          <Route exact path={["/", "/portfolio"]}>
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/contact">
            <Contact />
          </Route> */}
          <Route path="/projects">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </body>
  );
}
// Wrap all in router, what you want on every page (like a navbar) put at the very top. else
// <Switch>
// <Route exact path='/'>
// <Books /> <--- a component
// </Route>
// ... more routes
// </Switch>
