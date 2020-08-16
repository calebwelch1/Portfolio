import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";
import "./style.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

export default function IconBreadcrumbs(props) {
  const classes = useStyles();

  return (
    <Router>
      <Breadcrumbs aria-label="breadcrumb" className={classes.centered}>
        <Link color="inherit" to="/" href="/" className={classes.linkstyle}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        <Link to="/about" className={classes.linkstyle}>
          <AccountBoxIcon className={classes.icon} />
          About Me
        </Link>
        <Link
          to="/portfolio"
          onClick={handleClick}
          className={classes.linkstyle}
        >
          <FolderIcon className={classes.icon} />
          Portfolio
        </Link>
        <Link to="/contact" onClick={handleClick} className={classes.linkstyle}>
          <MailIcon className={classes.icon} />
          Contact
        </Link>
      </Breadcrumbs>
    </Router>
  );
}
