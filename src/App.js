import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// trying to add breadcrumbs
import { makeStyles } from "@material-ui/core/styles";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";

import IconBreadcrumbs from "./components/IconBreadcrumbs";
const useStyles = makeStyles((theme) => ({
  linkstyle: {
    display: "center",
    textAlign: "center",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  centered: {
    textAlign: "center",
    color: "white",
    marginLeft: "50px",
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
    <body className="background">
      <Router>
        {/* Navbar for every page */}
        <Breadcrumbs aria-label="breadcrumb" className={classes.centered}>
          <Link color="inherit" to="/" href="/" className={classes.linkstyle}>
            <HomeIcon className={classes.icon} />
            Home
          </Link>
          <Link to="/about" className={classes.linkstyle}>
            <AccountBoxIcon className={classes.icon} />
            About Me
          </Link>
          <Link to="/portfolio" className={classes.linkstyle}>
            <FolderIcon className={classes.icon} />
            Portfolio
          </Link>
          <Link to="/contact" className={classes.linkstyle}>
            <MailIcon className={classes.icon} />
            Contact
          </Link>
        </Breadcrumbs>
        <Switch>
          <Route exact path="/portfolio">
            <Home />
          </Route>
          <Route path="/portfolio/about">
            <About />
          </Route>
          <Route path="/portfolio/contact">
            <Contact />
          </Route>
          <Route path="/portfolio/projects">
            <Portfolio />
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
