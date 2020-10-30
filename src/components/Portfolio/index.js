import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import GRPortfolio from "../GRPortfolio";
import Screenshot from "../../assets/GRScreenshot.png";
import GSSCScreenshot from "../../assets/gsscscreen.png";
import SpyScreenshot from "../../assets/SpyScreenshot.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import Home from "../Home";
import "./index.css"
import SimpleAccordion from "../CustomerOnboardingAccordion"
import PDFViewer from "../PDFViewer/PDFViewer"
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#fff",
    backgroundColor: "transparent",
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
const handleViewPDF = () => {
  const pdf_url = "https://cors-anywhere.herokuapp.com/http://www.basicincome.com/bp/files/The_Abolition_of_Man-C_S_Lewis.pdf"
  const pdf_promise = fetch(pdf_url)
  .then(
    (result) => {
      return result;
    },
    (error) => {
      console.log('Uh oh!');
    }
  );
return pdf_promise;
       
}
  return (
    <div className={classes.root}>
      <Home />
      <Grid container spacing={3} className="textBackground">
        <Grid item xs={4}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.title}>
              PORTFOLIO
            </Typography>
          </ThemeProvider>
        </Grid>
        {/* Profile UI */}
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
            Customer Profile UI
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
     {/* dropdown */}
     <SimpleAccordion/>
 
          <Paper className={classes.paper}>
            Mock UI of a customer profile built in reactstrap
          </Paper>
          <Paper className={classes.paper}>
           React - Javascript - Reactstrap - CSS - Reusable -Web Design
          </Paper>
        </Grid>
        {/* PDF Viewer */}
        {/* <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
            PDF Viewer
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <PDFViewer
         handleViewPDF={handleViewPDF} >
          </PDFViewer>
          <Paper className={classes.paper}>
            A reusable PDF Viewing component built on top of React-PDF for easy PDF file viewing with a built in API for fetching a url and navigation
          </Paper>
          <Paper className={classes.paper}>
           React - Javascript - Bootstrap - React-PDF - React Class Based Component - Reusable
          </Paper>
        </Grid> */}
        {/* SPY */}
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
              Spy Issue Tracker
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <a href="https://spyissuetracker.herokuapp.com" target="_blank">
            <img
              class="img-fluid mb-3 mb-lg-0"
              id="project-image-ge"
              src={SpyScreenshot}
              alt="spy"
            />
          </a>
          <Paper className={classes.paper}>
            A modern project organization tool like Monday or Trello fit for
            organizations or individuals seeking to track and organize their
            endeavors.
          </Paper>
          <Paper className={classes.paper}>
           React - Javascript - MySql - ES6 - Sequelize - Material UI
          </Paper>
          <Paper className={classes.paper}>
            <a href="https://github.com/calebwelch1/Spy" target="_blank">
              <GitHubIcon />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
              Gamer Evolution
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <a
            href="https://fatidique-moliere-24500.herokuapp.com/index.html"
            target="_blank"
          >
            <img
              class="img-fluid mb-3 mb-lg-0"
              id="project-image-ge"
              src={Screenshot}
              alt="gamerrevolution"
            />
          </a>
          <Paper className={classes.paper}>
            A videogame aggregator and social media website designed to evolve
            the gaming social scene.
          </Paper>
          <Paper className={classes.paper}>
            Javascript - Chart.js - MySql - Sequelize - RESTFUL API 
          </Paper>
          <Paper className={classes.paper}>
            <a
              href="https://github.com/MariaKhantech/gamerevolution"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className={classes.title}>
              GSSC Image Gallery
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <a
            href="https://calebwelch1.github.io/Image-Gallery-App"
            target="_blank"
          >
            <img
              class="img-fluid mb-3 mb-lg-0"
              id="project-image-ge"
              src={GSSCScreenshot}
              alt="gamerrevolution"
            />
          </a>
          <Paper className={classes.paper}>
            A Pinterest-like image gallery utilizing the GIPHY and Unsplash
            API's. Search, share, and like gifs and images!
          </Paper>
          <Paper className={classes.paper}>
          Javascript - HTML - CSS
          </Paper>
          <Paper className={classes.paper}>
            <a
              href="https://github.com/CalebWelch1/Image-Gallery-App"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.centered}></p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>x</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>x</p>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.centered}>x</p>
        </Grid>
      </Grid>
    </div>
  );
}
