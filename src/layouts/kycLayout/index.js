import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';

import TopBar from "src/layouts/DashboardLayout/TopBar";
import SettingsContext from "src/context/SettingsContext";
import { useLocation } from "react-router-dom";
import { UserContext } from "src/context/User";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0B1426",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh",
  },
  rootLight:{
    background: "#F6F6F6;",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh",
  },
  wrapper1: {
    // backgroundColor: "#000",
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    paddingTop: 70,
    minHeight: "calc(100vh - 75px)",
    // [theme.breakpoints.up("lg")]: {
    //   paddingLeft: 290,
    // },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
    },
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    // backgroundColor: "#fff",
    paddingTop: 70,
    minHeight: "calc(100vh - 70px)",
    // [theme.breakpoints.up("lg")]: {
    //   paddingLeft: 290,
    // },
    "@media (max-width:767px)": {
      paddingTop: "70px !important",
    },
  },


  contentKyc:{
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    padding: "105px 25px 25px 25px",
    // [theme.breakpoints.down('lg')]: {
    //   padding: "30px 28px 30px",
    // },
    // [theme.breakpoints.down('md')]: {
    //   padding: "30px 28px 30px",
    // },
    // [theme.breakpoints.down('sm')]: {
    //   padding: "30px 10px 30px",
    // },
  }
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const themeSeeting = useContext(SettingsContext);
  const User = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState("Arbitrage");

  useEffect(() => {
    if (location) {
      if (
        location.pathname === "/sniper-dashboard" ||
        location.pathname === "/bot-setting" ||
        location.pathname === "/sniper-transactions"
      ) {
        setSelectedTab("Sniper");
      }
    }
  }, [location]);

  return (
    <div className={classes.rootLight }
    >
      <TopBar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />

          <div className={ classes.contentKyc} id="main-scroll">
            {children}
  
        </div>

    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
