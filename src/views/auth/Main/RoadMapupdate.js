import React, { useContext } from "react";
import { Box, Typography, Container, Hidden } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import SettingsContext from "src/context/SettingsContext";

const useStyles = makeStyles((theme) => ({
  mainbox: {
    padding: "80px 0px 0px",
    // backgroundColor: theme.palette.background.virtual,
    // backgroundColor: "#F8FBFF",
    // [theme.breakpoints.down('md')]: {
    //   padding: "20px 0px 20px",
    // },
    "& h3": {
      fontSize: "40px",
      // color: "#1D2D3F",
      // color: theme.palette.text.primary,

      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "700",
      marginBottom: "15px",
      // [theme.breakpoints.down('md')]: {
      //   fontSize: "32px",
      // },
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: "22px",
      // },
    },

    "& h4": {
      fontSize: "16px",
      color: "#848484",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      maxWidth: "900px",
      padding: "0px 15px",
    },

    "& .imgsection": {
      // [theme.breakpoints.down('xl')]: {
      //   marginTop: "-45px",
      // },
      // [theme.breakpoints.down('sm')]: {
      //   marginTop: "-20px",
      // },
    },
    "& .imageSectionDark": {
      padding: "25px 0px",
    },
  },
  RoadMapDisplay: {
    // [theme.breakpoints.down("xl")]: {
    //   display: "none",
    // },
    // [theme.breakpoints.down('md')]: {
    //   display: "flex",
    //   justifyContent: "center",
    // },
    "& .imgsectionBox": {
      maxWidth: "500px",
    },
  },
}));

const RoadMapupdate = () => {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  return <>
    <Box className={classes.mainbox}>
      <Box align="center">
        <Typography variant="h3" className="downBorder">
          Roadmap
        </Typography>

        <Typography variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cum
          facilisi cras eget sagittis, auctor nisi. Hac vulputate mi aliquam
          vel, at sit mauris. Lorem augue eros odio cum arcu ultricies
          imperdiet volutpat. Euismod purus, semper ullamcorper congue.
        </Typography>
      </Box>
      <Container>
        <Hidden mdDown>
          {themeSeeting?.themekey?.theme === "DARK" ? (
            <Box className="imageSectionDark">
              <img
                src="images/RoadMapLight.png"
                alt="Digital Bank Road Map"
              />
            </Box>
          ) : (
            <Box className="imgsection">
              <img
                src="images/Roadmapupdate.png"
                alt="Digital Bank Road Map"
              />
            </Box>
          )}
        </Hidden>
        <Box className={classes.RoadMapDisplay}>
          {themeSeeting?.themekey?.theme === "DARK" ? (
            <Box className="imgsectionBox">
              <img src="images/RoadMapDark.png" alt="Digital Bank Road Map" />
            </Box>
          ) : (
            <Box className="imgsectionBox">
              <img src="images/MobileRoad.png" alt="Digital Bank Road Map" />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  </>;
};

export default RoadMapupdate;
