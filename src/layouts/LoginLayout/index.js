import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Box, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { useNavigate, useLocation } from "react-router-dom";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: "fit-content",
    maxWidth: "508px",
    overflowY: "auto",
    borderRadius: "10px",
    padding: "28px",
    color: "#1A1919",
    margin: "auto",
    background: "#FFF",
    boxShadow: "3px 4px 9px 0px rgba(0, 0, 0, 0.25)",
    marginBottom: "20px",
    marginTop: "80px",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      margin: "40px 0 40px 0",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#FD9F49",
      borderRadius: "20px !important",
    },
    "@media(max-width:600px)": {
      padding: "20px",
    },
  },
  left: {
    height: "100%",
    "@media(max-width:959px)": {
      display: "none",
    },
  },
  mainScreenBack: {
    overflow: "hidden",
  },
  logo: {
    cursor: "pointer",
    width: "149px",
    padding: "20px",
    position: "absolute",
    top: "0",
    zIndex: "-1",
  },
  imageside: {
    width: "100%",
    height: "100vh",
    "@media (max-width: 950px)": {
      display: "none !important",
    },
  },
  firstscreen: {
    overflowY: "auto",
    height: "inherit",
    display: "grid",
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const themeSeeting = React.useContext(SettingsContext);

  return (
    <Box className={classes.mainScreenBack}>
      <Grid container style={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          className={classes.firstscreen}
        >
          <div onClick={() => navigate("/")}>
            <img className={classes.logo} src="images/logo.svg" />
          </div>

          <Box>
            <Box className={classes.content}>
              {children}
              {/* <Box style={{ display: "grid", justifyContent: "center", alignItems:"end" }}>
              <Typography classname={classes.dontacctypo}>Don’t have an account? <span classname={classes.signupspan} onClick={() => { navigate("/register") }} style={{ cursor: "pointer" }}>Sign up</span></Typography>
            </Box> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          className={classes.sideimagegrid}
        >
          <Box>
            <img
              className={classes.imageside}
              src="/images/Sideimage.png"
              alt="Side_Image"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginLayout;
